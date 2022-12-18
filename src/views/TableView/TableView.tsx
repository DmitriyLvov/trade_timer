import styles from './tableView.module.scss';
import { TopTitle } from '../../components/TopTitle/TopTitle';
import closeButton from './closeIcon.png';
import { TopDescription } from '../../components/TopDescription/TopDescription';
import { Table } from '../../components/Table/Table';
import { ITradeDescription, ITradeParticipant } from '../../interfaces/trade';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';

export const TableView = () => {
  const tradeName = 'Изготовление подогревателей Т-2 LTS BJM WS-8.42-2017041/9 - 2 шт. (21.10.2020 10:00)';
  const tradeDescription =
    'Стоимость изготовления предоставляется за вычетом стоимости теплообменной трубы 16х2, 0х3000мм, поставляемой ООО "ЛОТОС инжиниринг" не позднее 13.11.2020г';

  const descitpionData: ITradeDescription = {
    header: 'Параметры и требования',
    standarts: 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления (нет)',
    deadline:
      'Срок изготовления лота, дней (до 15.12.2020г. при заключении договора до 29.10.2020г. и передаче РКД до 05.11.2020г)',
    waranty:
      'Гарантийные обязательства, мес (24 мксяца с даты ввода в эксплуатацию, но не более 28 месяцев с латы передачи оборудования)',
    paying: 'Условия оплаты (20% аванс, 80% в течении 20 календарных дней с даты отгрузки)',
    price:
      'Стоимость изготовления лота, руб (без НДС) (Стоимость изготовления предоставляется за вычетом стоимости теплообменной трубы 16х2,0х3000м)',
    actions: 'Действия',
  };

  const participants: ITradeParticipant[] = [
    {
      header: 'ООО СпецКоманда (ООО УЗЮК)',
      standarts: 'нет',
      deadline: '45 календарных дней с момента заключения договора, получения аванса, РКД и материалов',
      waranty:
        'Гарантия 18 месяцев с момента пуска в эксплуатацию, но не более 24 месяцев со дня отгрузки оборудования с предприятия изготовителем',
      paying:
        '40% предоплата в течении 5 дней с момента заключения договора; 60% оплаты в течении 20 дней с момента отгрузки оборудования',
      priceStart: 2640000,
      priceCurrent: 1940000,
      id: '100',
    },
    {
      header: 'ЛОТОС ПРО',
      standarts: 'нет',
      deadline: 'да',
      waranty: 'да',
      paying: 'да',
      priceStart: 2080000,
      id: '101',
    },
    {
      header: 'ООО УЗПО',
      standarts: 'нет',
      deadline: 'до 15.12.2020 при заключении договра до 23.10.2020 и передачи РКД до 05.11.2020г',
      waranty: '24 месяца с даты поставки оборудования',
      paying: '20% аванс, 80% в течении 20 календарных дней с момента отгрузки оборудования',
      priceStart: 1900000,
      id: '102',
    },
    {
      header: 'ООО СЭМО',
      standarts: 'да',
      deadline: '80 календарных дней',
      waranty: '24 месяца с даты ввода в эксплуатацию, но не более 26 месяцев с даты передачи оборудования',
      paying: 'да',
      priceStart: 1960000,
      priceCurrent: 1940000,
      id: '103',
    },
  ];

  return (
    <section className={styles.layout}>
      <div className={styles.table}>
        <TopTitle tradeName={tradeName} />
        <div className={styles.wrapper}>
          <img className={styles.closeButton} src={closeButton} alt="close button"></img>
          <TopDescription tradeDescription={tradeDescription} />
          <Table participants={participants} description={descitpionData} />
          <ButtonPanel />
        </div>
      </div>
    </section>
  );
};
