import { TopTitle } from '../../components/TopTitle/TopTitle';
import { TopDescription } from '../../components/TopDescription/TopDescription';
import { Table } from '../../components/Table/Table';
import closeButton from '../../images/closeIcon.png';
import { ButtonPanel } from '../../components/ButtonPanel/ButtonPanel';
import { participants, descriptionData } from '../../constants/server';
import styles from './tableView.module.scss';

export const TableView = () => {
  const tradeName = 'Изготовление подогревателей Т-2 LTS BJM WS-8.42-2017041/9 - 2 шт. (21.10.2020 10:00)';
  const tradeDescription =
    'Стоимость изготовления предоставляется за вычетом стоимости теплообменной трубы 16х2, 0х3000мм, поставляемой ООО "ЛОТОС инжиниринг" не позднее 13.11.2020г';

  return (
    <section className={styles.layout}>
      <div className={styles.table}>
        <TopTitle tradeName={tradeName} />
        <div className={styles.wrapper}>
          <img className={styles.closeButton} src={closeButton} alt="close button"></img>
          <TopDescription tradeDescription={tradeDescription} />
          <Table participants={participants} description={descriptionData} />
          <ButtonPanel />
        </div>
      </div>
    </section>
  );
};
