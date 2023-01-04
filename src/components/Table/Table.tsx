import { Link } from 'react-router-dom';
import { PARTICIPANT_TITLE } from '../../constants/trade';
import { ITradeDescription, ITradeParticipant } from '../../interfaces/trade';
import styles from './table.module.scss';

import { TableTimer } from '../TableTimer/TableTimer';

interface ITableProps {
  participants: ITradeParticipant[];
  description: ITradeDescription;
  isTimerEnabled?: boolean;
  isLinkEnabled?: boolean;
  isUserNumber?: boolean;
}

export const Table = ({
  participants,
  description,
  isTimerEnabled = true,
  isLinkEnabled = true,
  isUserNumber = true,
}: ITableProps) => {
  const getDataFromParticipan = (findedKey: string, participant: ITradeParticipant) => {
    let key: keyof ITradeParticipant;
    for (key in participant) {
      if (key === findedKey) {
        return participant[key];
      }
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        {isTimerEnabled && <TableTimer userCount={participants.length} />}
        <tr className={styles.headerRow}>
          <td className={styles.headerCell}>{description.header}</td>
          {participants.map((participant, index) => (
            <td className={styles.headerCell} key={`title_${participant.id}`}>
              {isUserNumber && (
                <p className={styles.tableCellText}>
                  {PARTICIPANT_TITLE}
                  {index + 1}
                </p>
              )}
              <p className={styles.tableCellText + ' ' + styles.tableCellText_bold}>
                {getDataFromParticipan('header', participant)}
              </p>
              {isLinkEnabled && <Link to={`/user/${index + 1}`}>Ссылка для входа</Link>}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(description).map(([key, value]) => {
          if (key !== 'header') {
            return (
              <tr className={styles.row} key={key}>
                <td className={styles.description}>{value}</td>
                {participants.map((participant) => (
                  <td className={styles.participant} key={`table_cell_${participant.id}`}>
                    {getDataFromParticipan(key, participant)}
                  </td>
                ))}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
