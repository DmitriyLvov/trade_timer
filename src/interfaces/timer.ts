export interface ITimer {
  step: number;
  start?: number;
  userQty: number;
}

export interface ITimerSession {
  currentStep: number;
  currentUserNumber: number;
  errorText: string;
  startTimer: () => void;
  stopTimer: () => void;
}
