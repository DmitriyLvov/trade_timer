module.exports = calculateStepAndIndex = (start, step, userQty) => {
  const now = Date.now();
  const duration_sec = (now - start) / 1000;
  const currentStep = step - Math.round(duration_sec % step);
  const stepQty = Math.floor(duration_sec / step);
  const currentUserNumber = (stepQty % userQty) + 1;
  return { currentStep, currentUserNumber };
};
