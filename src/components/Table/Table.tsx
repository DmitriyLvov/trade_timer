import { Link } from 'react-router-dom';
import { PARTICIPANT_TITLE } from '../../constants/trade';
import { ITradeDescription, ITradeParticipant } from '../../interfaces/trade';
import styles from './table.module.scss';
import { TableTimer } from '../TableTimer/TableTimer';
import { useParams } from 'react-router';

interface ITableProps {
  participants: ITradeParticipant[];
  description: ITradeDescription;
  isLinkEnabled?: boolean;
}

export const Table = ({ participants, description, isLinkEnabled = true }: ITableProps) => {
  const { userNumber } = useParams();

  const getDataFromParticipant = (findedKey: string, participant: ITradeParticipant) => {
    let key: keyof ITradeParticipant;
    for (key in participant) {
      if (key === findedKey) {
        return participant[key];
      }
    }
  };

  const getArrayFromDescription = () => {
    const result: { key: string; value: any }[] = [];
    Object.entries(description).forEach(([key, value]) => {
      if (key !== 'header') {
        result.push({ key, value });
      }
    });
    return result;
  };

  return (
    <table className={styles.table}>
      <thead>
        <TableTimer userCount={participants.length} />
        <tr className={styles.headerRow}>
          <td className={styles.headerCell}>{description.header}</td>
          {participants.map((participant, index) => (
            <td className={styles.headerCell} key={`title_${participant.id}`}>
              <p className={styles.tableCellText}>
                {PARTICIPANT_TITLE}
                {userNumber ? userNumber : index + 1}
              </p>
              <p className={styles.tableCellText + ' ' + styles.tableCellText_bold}>
                {getDataFromParticipant('header', participant)}
              </p>
              {isLinkEnabled && <Link to={`/user/${index + 1}`}>Ссылка для входа</Link>}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {getArrayFromDescription().map(({ key, value }) => (
          <tr className={styles.row} key={key}>
            <td className={styles.description}>{value}</td>
            {participants.map((participant) => (
              <td className={styles.participant} key={`table_cell_${participant.id}`}>
                {getDataFromParticipant(key, participant)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
