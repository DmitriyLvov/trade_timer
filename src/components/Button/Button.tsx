import styles from './button.module.scss';

interface IButtonProps {
  text: string;
  color: string;
  textColor: string;
}

export const Button = ({ text, color, textColor }: IButtonProps) => {
  return (
    <button type="button" className={styles.button} style={{ backgroundColor: color, color: textColor }}>
      {text}
    </button>
  );
};
