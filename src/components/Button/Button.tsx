import styles from './button.module.scss';

interface IButtonProps {
  text: string;
  color: string;
  textColor: string;
  onClick?: () => void;
  width?: number;
}

const Button = ({ text, color, textColor, onClick, width }: IButtonProps) => {
  const buttonStyle = { backgroundColor: color, color: textColor, width: '' };
  if (width) {
    buttonStyle.width = `${width}px`;
  }
  return (
    <button type="button" onClick={onClick} className={styles.button} style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
