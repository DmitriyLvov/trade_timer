import { useParams } from 'react-router';
import { participants } from '../../constants/server';
import { Table } from '../../components/Table/Table';
import { descriptionData } from '../../constants/server';
import { useTimerContext } from '../../contexts/TimerContext';
import styles from './userView.module.scss';

export const UserView = () => {
  const { userNumber } = useParams();
  const { currentUserNumber } = useTimerContext();

  const userIndex = Number.parseInt(userNumber!) - 1;

  return (
    <>
      {currentUserNumber && currentUserNumber > 0 ? (
        <div className={styles.root}>
          {currentUserNumber === userIndex + 1 ? (
            <p className={`${styles.text} ${styles.text_green}`}>Сейчас ваш ход</p>
          ) : (
            <p className={`${styles.text} ${styles.text_red}`}>Ход участника {currentUserNumber}</p>
          )}
          <Table
            participants={[participants[userIndex]]}
            description={descriptionData}
            isLinkEnabled={false}
          />
        </div>
      ) : (
        <p>Торги не проводятся</p>
      )}
    </>
  );
};
