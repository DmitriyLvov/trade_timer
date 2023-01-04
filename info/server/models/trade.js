const { Schema, model } = require('mongoose');

const tradeSchema = new Schema({
  start: { type: Number }, // Время старта
  userQty: { type: Number }, // количество участников
  step: { type: Number }, // Шаг одного участника
});

module.exports = model('trade', tradeSchema);
