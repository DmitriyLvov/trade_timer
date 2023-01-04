import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { participants } from '../../constants/server';
import { useTradeTimer } from '../../hooks/useTradeTimer';
import { ITimerSession } from '../../interfaces/timer';

export const UserView = () => {
  const { userNumber } = useParams();
  const [timerSession, setTimerSession] = useState<ITimerSession>();
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timer>();
  const { sessionHandler } = useTradeTimer(setTimerSession);

  const userIndex = Number.parseInt(userNumber!) - 1;

  // Первый запрос информации с сервера
  useEffect(() => {
    const timer_id = setInterval(() => sessionHandler(), 1000);
    setCurrentTimer(timer_id);
    return () => clearTimeout(currentTimer);
  }, []);

  return (
    <>
      {timerSession?.currentUserNumber && timerSession.currentUserNumber > 0 ? (
        <UserInfo participant={participants[userIndex]} timerSession={timerSession} userIndex={userIndex} />
      ) : (
        <p>Торги не проводятся</p>
      )}
    </>
  );
};
