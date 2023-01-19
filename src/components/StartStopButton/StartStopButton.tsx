import { useEffect, useState } from 'react';
import { useTimerContext } from '../../contexts/TimerContext';
import Button from '../Button/Button';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import styles from './startStopButton.module.scss';

const StartStopButton = () => {
  const { currentUserNumber, errorText, startTimer, stopTimer } = useTimerContext();

  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (errorText && errorText !== '') {
      setPopupVisible(true);
    }
  }, [errorText]);

  const popupCloseHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPopupVisible(false);
  };

  return (
    <div>
      {currentUserNumber === 0 ? (
        <Button text="Начать торги" color="#259b24" textColor="white" onClick={startTimer} width={126} />
      ) : (
        <Button text="Завершить торги" color="#B71C1C" textColor="white" onClick={stopTimer} width={126} />
      )}
      <PopupWithForm
        title="Ошибка подключения"
        buttonText="ОК"
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        onSubmit={popupCloseHandler}
      >
        <p className={styles.popupText}>{errorText}</p>
      </PopupWithForm>
    </div>
  );
};

export default StartStopButton;
