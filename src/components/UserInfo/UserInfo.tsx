import { descriptionData } from '../../constants/server';
import { convertSecondsToTimerFormat } from '../../utils/dataUtils';
import { Table } from '../Table/Table';
import { ITimerSession } from '../../interfaces/timer';
import styles from './userInfo.module.scss';

interface IUserInfoProps {
  participant: any;
  timerSession: ITimerSession;
  userIndex: number;
}

export const UserInfo = ({ participant, timerSession, userIndex }: IUserInfoProps) => {
  return (
    <div className={styles.root}>
      {timerSession.currentUserNumber === userIndex + 1 ? (
        <>
          <p className={`${styles.text} ${styles.text_green}`}>Сейчас ваш ход</p>
          <p className={styles.text}>Осталось: {convertSecondsToTimerFormat(timerSession.currentStep)}</p>
        </>
      ) : (
        <>
          <p className={`${styles.text} ${styles.text_red}`}>
            Ход участника {timerSession.currentUserNumber}
          </p>
          <p className={styles.text}>Время хода: {convertSecondsToTimerFormat(timerSession.currentStep)}</p>
        </>
      )}
      <Table
        participants={[participant]}
        description={descriptionData}
        isTimerEnabled={false}
        isLinkEnabled={false}
        isUserNumber={false}
      />
    </div>
  );
};
