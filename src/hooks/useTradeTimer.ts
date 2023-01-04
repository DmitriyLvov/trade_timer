import { getSessionInfoAPI, startTimerAPI, stopTimerAPI } from '../api';
import { TRADE_SESSION_ID, STEP_DURATION_SEC, USER_QTY } from '../constants/trade';
import { ITimerSession } from '../interfaces/timer';

export const useTradeTimer = (setTimerState: (state: ITimerSession) => void) => {
  const sessionHandler = () => {
    getSessionInfoAPI(TRADE_SESSION_ID)
      .then(({ data }) => {
        setTimerState(data);
      })
      .catch((er) => console.log(er));
  };

  const startTimer = () => {
    console.log('start timer on 20 sec');
    const sessionInfo = {
      step: STEP_DURATION_SEC,
      userQty: USER_QTY,
      _id: TRADE_SESSION_ID,
    };

    startTimerAPI(sessionInfo)
      .then(({ data }) => {
        setTimerState(data);
      })
      .catch((er) => console.log(er));
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
