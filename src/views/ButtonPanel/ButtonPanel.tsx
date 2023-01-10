import { useContext } from 'react';
import { Button } from '../../components/Button/Button';
import { TimerContext } from '../../context/TimerContext';
import styles from './buttonPanel.module.scss';

interface IButtonPanelProps {
  startTimer: () => void;
  stopTimer: () => void;
}

export const ButtonPanel = ({ startTimer, stopTimer }: IButtonPanelProps) => {
  const { currentUserNumber } = useContext(TimerContext);

  return (
    <div className={styles.root}>
      <Button text="Чат" color="#8bc34a" textColor="white" />
      <Button text="Обновить" color="#64B5F6" textColor="white" />
      {currentUserNumber === 0 ? (
        <Button text="Начать торги" color="#259b24" textColor="white" onClick={startTimer} />
      ) : (
        <Button text="Завершить торги" color="#B71C1C" textColor="white" onClick={stopTimer} />
      )}
      <Button text="Отчет" color="#FCE4EC" textColor="red" />
      <Button text="Закрыть" color="#E0E0E0" textColor="black" />
    </div>
  );
};
