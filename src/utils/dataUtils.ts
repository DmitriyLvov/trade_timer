// Конвертация секунд таймера в формат ЧЧ:ММ:СС
export const convertSecondsToTimerFormat = (timerSeconds: number) => {
  let seconds = timerSeconds % 60;
  let hours = Math.floor(timerSeconds / 3600);
  let minutes = Math.floor((timerSeconds - hours * 60) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};
