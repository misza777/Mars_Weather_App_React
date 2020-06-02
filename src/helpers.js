export const formatDate = (date) =>
  date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};

export const displaySpeed = (speed, isMetric) => {
  let returnSpeed = speed;
  if (!isMetric) {
    returnSpeed = speed / 1.609;
  }
  return Math.round(returnSpeed);
};
