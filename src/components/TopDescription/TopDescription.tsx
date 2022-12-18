import styles from './topDescription.module.scss';

interface ITopDescriptionProps {
  tradeDescription: string;
}

export const TopDescription = ({ tradeDescription }: ITopDescriptionProps) => {
  return (
    <h4 className={styles.description}>
      <span className={styles.descriptionText}>{tradeDescription}</span>
    </h4>
  );
};
