import { useEffect, useState } from 'react';
import { getSessionInfoAPI, startTimerAPI, stopTimerAPI } from '../api';
import { TRADE_SESSION_ID, STEP_DURATION_SEC, USER_QTY } from '../constants/trade';
import { TimerContext } from '../contexts/TimerContext';

interface ISessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: ISessionProviderProps) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [currentUserNumber, setCurrentUserNumber] = useState(-1);
  const [errorText, setErrorText] = useState('');

  const errorTextTemplate =
    'Backend данного приложения запущен на прерываемом сервере(остановка каждые 24 часа). Если появилась эта ' +
    'ошибка и все в порядке с интернет соединением, то напишите мне в телеграм @eldmitrio для запуска сервера.';

  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timer>();

  const saveDataToStates = (data: { currentStep: number; currentUserNumber: number }) => {
    setCurrentStep(data.currentStep);
    setCurrentUserNumber(data.currentUserNumber);
  };

  const startPeriodicalRequest = () => {
    const timer_id = setInterval(() => sessionHandler(), 1000);
    setCurrentTimer(timer_id);
  };

  const sessionHandler = () => {
    return getSessionInfoAPI(TRADE_SESSION_ID)
      .then(({ data }) => {
        saveDataToStates(data);
        return 'OK';
      })
      .catch((er) => {
        console.log(er);
        setErrorText(errorTextTemplate);
      });
  };

  // Первый запрос информации с сервера
  useEffect(() => {
    sessionHandler().then((res) => {
      if (res === 'OK') {
        startPeriodicalRequest();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = () => {
    console.log('start timer on 20 sec');
    const sessionInfo = {
      step: STEP_DURATION_SEC,
      userQty: USER_QTY,
      _id: TRADE_SESSION_ID,
    };

    startTimerAPI(sessionInfo)
      .then(({ data }) => {
        saveDataToStates(data);
        startPeriodicalRequest();
      })
      .catch((er) => {
        console.log(er);
        if (er?.code === 'ERR_NETWORK') {
          setErrorText(errorTextTemplate);
        }
      });
  };

  const stopTimer = () => {
    console.log('stop timer');
    stopTimerAPI(TRADE_SESSION_ID)
      .then(() => {
        clearTimeout(currentTimer);
        saveDataToStates({ currentStep: 0, currentUserNumber: 0 });
      })
      .catch((er) => console.log(er));
  };

  return (
    <TimerContext.Provider value={{ startTimer, stopTimer, errorText, currentStep, currentUserNumber }}>
      {children}
    </TimerContext.Provider>
  );
};

export default SessionProvider;
