import styles from './topTitle.module.scss';

interface ITopTitleProps {
  tradeName: string;
}

export const TopTitle = ({ tradeName }: ITopTitleProps) => {
  return (
    <>
      <h2 className={styles.header} data-test-id="header">
        Ход торгов - <span className={styles.header_bold}>{tradeName}</span>
      </h2>
    </>
  );
};
