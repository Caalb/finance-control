export const dateToUnixTimestamp = (date: Date): number => {
  return Math.floor(date.getTime());
}

export const unixTimestampToDate = (timestamp: number): Date => {
  return new Date(timestamp);
}