import styles from './popupWithForm.module.scss';
import closeButton from '../../images/closeIcon.png';
interface IPopupWithFormProps {
  title: string;
  onClose: () => void;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
    <div className={visible ? `${styles.popup} ${styles.popupOpened}` : styles.popup}>
      <form onSubmit={onSubmit} className={`${styles.popupContainer} ${styles.popupContainerTypeForm}`}>
        <button
          type="button"
          style={{ backgroundImage: closeButton }}
          className={styles.popupCloseButton}
          onClick={onClose}
        ></button>
        <h2 className={styles.popupTitle}>{title}</h2>
        {children}
        {isValid ? (
          <button
            type="submit"
            className={`${styles.popupSubmitButton} ${styles.popupSubmitButtonTypeConfirm}`}
          >
            {buttonText}
          </button>
        ) : (
          <button
            type="submit"
            className={`${styles.popupSubmitButton} ${styles.popupSubmitButtonTypeConfirm} ${styles.popupSubmitButtonDisabled}`}
            disabled
          >
            {buttonText}
          </button>
        )}
      </form>
    </div>
  );
};
