import { Button } from '../../components/Button/Button';
import styles from './buttonPanel.module.scss';

export const ButtonPanel = () => {
  return (
    <div className={styles.root}>
      <Button text="Чат" color="rgb(0, 100, 0)" textColor="white" />
      <Button text="Обновить" color="LightSkyBlue" textColor="white" />
    </div>
  );
};
