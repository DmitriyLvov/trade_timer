import timer_icon from './timer-min.svg';
import { useTimerContext } from '../../contexts/TimerContext';
import { convertSecondsToTimerFormat } from '../../utils/dataUtils';
import styles from './tableTimer.module.scss';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

interface ITableTimerProps {
  userCount: number;
}

export const TableTimer = ({ userCount }: ITableTimerProps) => {
  const { currentUserNumber, currentStep } = useTimerContext();
  const [userNumber, setUserNumber] = useState(0);

  const { userNumber: userNumberFromAdress } = useParams();

  useEffect(() => {
    if (userNumberFromAdress) {
      setUserNumber(Number.parseInt(userNumberFromAdress));
    }
  }, [userNumberFromAdress]);

  const isIndividualTimer = userNumber ? true : false;

  return (
    <tr className={styles.row}>
      <td className={styles.cellWrapper}>
        <div className={`${styles.cell} ${styles.cell_description}`}>
          <p className={`${styles.cellText} ${styles.cellText_description}`}>Ход</p>
        </div>
      </td>
      {isIndividualTimer ? (
        <>
          {currentUserNumber === userNumber && (
            <td className={styles.isIndividualTimer}>
              <p className={styles.cellText}>{convertSecondsToTimerFormat(currentStep)}</p>
            </td>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </tr>
  );
};
