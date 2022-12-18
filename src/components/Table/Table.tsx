import { PARTICIPANT_TITLE } from '../../constants/trade';
import { ITradeDescription, ITradeParticipant } from '../../interfaces/trade';
import styles from './table.module.scss';

interface ITableProps {
  participants: ITradeParticipant[];
  description: ITradeDescription;
}

export const Table = ({ participants, description }: ITableProps) => {
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
        <tr className={styles.headerRow}>
          <td className={styles.headerCell}>{description.header}</td>
          {participants.map((participant, index) => (
            <td className={styles.headerCell}>
              <p className={styles.tableCellText}>
                {PARTICIPANT_TITLE}
                {index + 1}
              </p>
              <p className={styles.tableCellText + ' ' + styles.tableCellText_bold}>
                {getDataFromParticipan('header', participant)}
              </p>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(description).map(([key, value]) => {
          if (key !== 'header') {
            return (
              <tr className={styles.row}>
                <td className={styles.description}>{value}</td>
                {participants.map((participant) => (
                  <td className={styles.participant}>{getDataFromParticipan(key, participant)}</td>
                ))}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
