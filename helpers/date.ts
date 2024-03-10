export const dateToUnixTimestamp = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
}

export const unixTimestampToDate = (timestamp: number): Date => {
  return new Date(timestamp * 1000);
}