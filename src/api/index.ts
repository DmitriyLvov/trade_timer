import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { ITimer } from '../interfaces/timer';

const API = axios.create({ baseURL: BASE_URL });

export const getSessionInfoAPI = (session_id: string) => API.get(`/sessionInfo/${session_id}`);

export const startTimerAPI = (sessionInfo: ITimer) => API.post(`/startTimer`, sessionInfo);

export const stopTimerAPI = (session_id: string) => API.delete(`/stopTimer/${session_id}`);
