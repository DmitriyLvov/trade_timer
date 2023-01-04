const Trade = require('../models/trade');
const calculateStepAndIndex = require('../utils/calculateStepAndIndex');

module.exports.getSessionInfo = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const sessionInfo = await Trade.findById(sessionId);
    if (sessionInfo) {
      const { start, step, userQty } = sessionInfo;
      res.json(calculateStepAndIndex(start, step, userQty));
    }
    // Если сессия не найдена, то возвращаем пустые значения
    else {
      res.json({ currentStep: 0, currentUserNumber: 0 });
    }
  } catch (e) {
    res.status(500).send(`Error in get session process: ${e.message}`);
  }
};

module.exports.startTimer = async (req, res) => {
  try {
    const { step, userQty, _id } = req.body;
    const sessionInfo = {
      step,
      start: Date.now(),
      userQty,
      _id,
    };

    let newSession = await Trade.findByIdAndUpdate(_id, sessionInfo, { new: true });
    if (!newSession) {
      newSession = await Trade.create(sessionInfo);
    }
    const { start, step: stepDB, userQty: userQtyDB } = newSession;
    res.json(calculateStepAndIndex(start, stepDB, userQtyDB));
  } catch (e) {
    res.status(500).send(`Error in get timer start process: ${e.message}`);
  }
};

module.exports.stopTimer = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const deleteResult = await Trade.findByIdAndDelete(sessionId);
    res.json(deleteResult);
  } catch (e) {
    res.status(500).send(`Error in timer stop process: ${e.message}`);
  }
};
