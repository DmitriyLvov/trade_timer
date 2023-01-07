import { getSessionInfoAPI, startTimerAPI, stopTimerAPI } from '../api';
import { TRADE_SESSION_ID, STEP_DURATION_SEC, USER_QTY } from '../constants/trade';
import { ITimerSession } from '../interfaces/timer';

export const useTradeTimer = (setTimerState: (state: ITimerSession) => void) => {
  const errorText =
    'Backend данного приложения запущен на прерываемом сервере(остановка каждые 24 часа). Если появилась эта ' +
    'ошибка и все в порядке с интернет соединением, то напишите мне в телеграм @eldmitrio для запуска сервера.';
  const sessionHandler = () => {
    return getSessionInfoAPI(TRADE_SESSION_ID)
      .then(({ data }) => {
        setTimerState(data);
      })
      .catch((er) => {
        console.log(er);
        return errorText;
      });
  };

  const startTimer = () => {
    console.log('start timer on 20 sec');
    const sessionInfo = {
      step: STEP_DURATION_SEC,
      userQty: USER_QTY,
      _id: TRADE_SESSION_ID,
    };

    return startTimerAPI(sessionInfo)
      .then(({ data }) => {
        setTimerState(data);
      })
      .catch((er) => {
        console.log(er);
        if (er?.code === 'ERR_NETWORK') {
          return errorText;
        }
      });
  };

  const stopTimer = () => {
    console.log('stop timer on 20 sec');
    stopTimerAPI(TRADE_SESSION_ID)
      .then(() => {
        // clearTimeout(currentTimer);
        setTimerState({ currentStep: 0, currentUserNumber: 0 });
      })
      .catch((er) => console.log(er));
  };

  return { sessionHandler, startTimer, stopTimer };
};
