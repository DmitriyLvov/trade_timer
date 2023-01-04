import styles from './button.module.scss';

interface IButtonProps {
  text: string;
  color: string;
  textColor: string;
  onClick?: () => void;
}

export const Button = ({ text, color, textColor, onClick }: IButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
    </button>
  );
};
