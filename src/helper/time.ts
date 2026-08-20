export function isSameHourMinute(first?: Date, second?: Date) {
  if (!first || !second) return false;

  return (
    first.getHours() === second.getHours() &&
    first.getMinutes() === second.getMinutes()
  );
}