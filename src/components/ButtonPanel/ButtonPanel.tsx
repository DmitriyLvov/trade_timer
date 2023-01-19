import Button from '../../components/Button/Button';
import StartStopButton from '../StartStopButton/StartStopButton';
import styles from './buttonPanel.module.scss';

export const ButtonPanel = () => {
  return (
    <div className={styles.root}>
      <Button text="Чат" color="#8bc34a" textColor="white" />
      <Button text="Обновить" color="#64B5F6" textColor="white" />
      <StartStopButton />
      <Button text="Отчет" color="#FCE4EC" textColor="red" />
      <Button text="Закрыть" color="#E0E0E0" textColor="black" />
    </div>
  );
};
