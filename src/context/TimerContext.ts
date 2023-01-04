import { createContext } from 'react';
import { ITimerSession } from '../interfaces/timer';
export const TimerContext = createContext<ITimerSession>({ currentStep: 0, currentUserNumber: 0 });
