import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PopupWithForm } from '../../components/PopupWithForm/PopupWithForm';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { participants } from '../../constants/server';
import { useTradeTimer } from '../../hooks/useTradeTimer';
import { ITimerSession } from '../../interfaces/timer';

export const UserView = () => {
  const { userNumber } = useParams();
  const [timerSession, setTimerSession] = useState<ITimerSession>();
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timer>();

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  const { sessionHandler } = useTradeTimer(setTimerSession);

  const userIndex = Number.parseInt(userNumber!) - 1;

  // Первый запрос информации с сервера
  useEffect(() => {
    sessionHandler().then((res) => {
      if (typeof res === 'string') {
        popupOpen(res);
      } else {
        const timer_id = setInterval(() => sessionHandler(), 1000);
        setCurrentTimer(timer_id);
        return () => clearTimeout(currentTimer);
      }
    });
  }, []);

  const popupOpen = (errorText: string) => {
    setPopupText(errorText);
    setPopupVisible(true);
  };

  const popupCloseHandler = () => {
    setPopupVisible(false);
    setPopupText('');
  };

  return (
    <>
      {timerSession?.currentUserNumber && timerSession.currentUserNumber > 0 ? (
        <UserInfo participant={participants[userIndex]} timerSession={timerSession} userIndex={userIndex} />
      ) : (
        <p>Торги не проводятся</p>
      )}
      <PopupWithForm
        title="Ошибка подключения"
        buttonText="ОК"
        visible={popupVisible}
        onClose={popupCloseHandler}
        onSubmit={popupCloseHandler}
      >
        <p>{popupText}</p>
      </PopupWithForm>
    </>
  );
};
