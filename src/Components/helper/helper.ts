export const getErrorMessage = (
  min: number,
  max: number,
  target: number
): string | null => {
  if (min > max)
    return "Min temperature cannot be greater than max temperature";
  else if (min > target)
    return "Min temperature cannot be greater than target temperature";
  else if (target > max)
    return "Target temperature cannot be greater than max temperature";
  return null;
};
export const getKnobPosition = (
  min: number,
  max: number,
  target: number
): number => {
  const tempDiff = max - min;
  const normalizedTargetTemperature = target - min;
  const percentage = (normalizedTargetTemperature * 100) / tempDiff;
  const rotation = (280 * percentage) / 100;
  return rotation + 40;
};
