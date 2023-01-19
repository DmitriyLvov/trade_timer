import { createContext, useContext } from 'react';
import { ITimerSession } from '../interfaces/timer';
export const TimerContext = createContext<ITimerSession>({
  currentStep: -1,
  currentUserNumber: -1,
  errorText: '',
  startTimer: () => {},
  stopTimer: () => {},
});
export const useTimerContext = () => useContext(TimerContext);
