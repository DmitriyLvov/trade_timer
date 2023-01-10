import styles from './popupWithForm.module.scss';
import closeButton from '../../images/closeIcon.png';

interface IPopupWithFormProps {
  title: string;
  onClose: () => void;
  buttonText: string;
  onSubmit: () => void;
  isValid?: boolean;
  visible: boolean;
  children: React.ReactElement;
}

export const PopupWithForm = ({
  title,
  onClose,
  buttonText,
  onSubmit,
  isValid = true,
  visible,
  children,
}: IPopupWithFormProps) => {
  return (
    <div className={visible ? `${styles.popup} ${styles.popup_opened}` : styles.popup}>
      <form onSubmit={onSubmit} className={`${styles.popup__container} ${styles.popup__container_type_form}`}>
        <button
          type="button"
          style={{ backgroundImage: closeButton }}
          className={styles.popup__closeButton}
          onClick={onClose}
        ></button>
        <h2 className={styles.popup__title}>{title}</h2>
        {children}
        {isValid ? (
          <button
            type="submit"
            className={`${styles.popup__submitButton} ${styles.popup__submitButton_type_confirm}`}
          >
            {buttonText}
          </button>
        ) : (
          <button
            type="submit"
            className={`${styles.popup__submitButton} ${styles.popup__submitButton_type_confirm} ${styles.popup__submitButton_disabled} `}
            disabled
          >
            {buttonText}
          </button>
        )}
      </form>
    </div>
  );
};
