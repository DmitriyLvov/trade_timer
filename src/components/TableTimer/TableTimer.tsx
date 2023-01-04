import timer_icon from './timer-min.svg';
import styles from './tableTimer.module.scss';
import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import { convertSecondsToTimerFormat } from '../../utils/dataUtils';

interface ITableTimerProps {
  userCount: number;
}

export const TableTimer = ({ userCount }: ITableTimerProps) => {
  const { currentUserNumber, currentStep } = useContext(TimerContext);

  return (
    <tr className={styles.row}>
      <td className={styles.cellWrapper}>
        <div className={`${styles.cell} ${styles.cell_description}`}>
          <p className={`${styles.cellText} ${styles.cellText_description}`}>Ход</p>
        </div>
      </td>
      {Array.from({ length: userCount }).map((empty, index) =>
        index + 1 === currentUserNumber ? (
          <td className={styles.cellWrapper} key={`timer_${index}`}>
            <div className={styles.cell}>
              <p className={styles.cellText}>{convertSecondsToTimerFormat(currentStep)}</p>
            </div>
            <img alt="clock" className={styles.cellTimerIcon} src={timer_icon} />
          </td>
        ) : (
          <td key={`timer_${index}`} />
        ),
      )}
    </tr>
  );
};
