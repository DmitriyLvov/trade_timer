import axios from 'axios';
import { ITimer } from '../interfaces/timer';

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const getSessionInfoAPI = (session_id: string) => API.get(`/sessionInfo/${session_id}`);

export const startTimerAPI = (sessionInfo: ITimer) => API.post(`/startTimer`, sessionInfo);

export const stopTimerAPI = (session_id: string) => API.delete(`/stopTimer/${session_id}`);
