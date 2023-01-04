const tradeRouter = require('express').Router();

const { getSessionInfo, startTimer, stopTimer } = require('../controllers/trade');

tradeRouter.get('/sessionInfo/:sessionId', getSessionInfo);

tradeRouter.post('/startTimer', startTimer);

tradeRouter.delete('/stopTimer/:sessionId', stopTimer);

module.exports = tradeRouter;
