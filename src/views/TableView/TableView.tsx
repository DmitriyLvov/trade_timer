import styles from './tableView.module.scss';
import { TopTitle } from '../../components/TopTitle/TopTitle';
import closeButton from './closeIcon.png';
import { TopDescription } from '../../components/TopDescription/TopDescription';
import { Table } from '../../components/Table/Table';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';
import { useEffect, useState } from 'react';
import { ITimerSession } from '../../interfaces/timer';
import { TimerContext } from '../../context/TimerContext';
import { useTradeTimer } from '../../hooks/useTradeTimer';
import { participants, descriptionData } from '../../constants/server';

export const TableView = () => {
  const tradeName = 'Изготовление подогревателей Т-2 LTS BJM WS-8.42-2017041/9 - 2 шт. (21.10.2020 10:00)';
  const tradeDescription =
    'Стоимость изготовления предоставляется за вычетом стоимости теплообменной трубы 16х2, 0х3000мм, поставляемой ООО "ЛОТОС инжиниринг" не позднее 13.11.2020г';

  const [timerSession, setTimerSession] = useState<ITimerSession>({ currentStep: 0, currentUserNumber: 0 });
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timer>();

  const { sessionHandler, startTimer, stopTimer } = useTradeTimer(setTimerSession);

  // Первый запрос информации с сервера
  useEffect(() => {
    sessionHandler();
  }, []);

  useEffect(() => {
    if (timerSession.currentUserNumber > 0 && !currentTimer) {
      const timer_id = setInterval(() => sessionHandler(), 1000);
      setCurrentTimer(timer_id);
    }
    if (timerSession.currentUserNumber === 0 && currentTimer) {
      clearTimeout(currentTimer);
      setCurrentTimer(undefined);
    }
  }, [currentTimer, timerSession]);

  return (
    <section className={styles.layout}>
      <TimerContext.Provider value={timerSession}>
        <div className={styles.table}>
          <TopTitle tradeName={tradeName} />
          <div className={styles.wrapper}>
            <img className={styles.closeButton} src={closeButton} alt="close button"></img>
            <TopDescription tradeDescription={tradeDescription} />
            <Table participants={participants} description={descriptionData} />
            <ButtonPanel startTimer={startTimer} stopTimer={stopTimer} />
          </div>
        </div>
      </TimerContext.Provider>
    </section>
  );
};

export default TableView;
