// o nuxt faz auto-immport da pasta utils. Considere renomear a pasta para utils e ter a vantagem de ter um import a menos

export const dateToUnixTimestamp = (date: Date): number => {
  return Math.floor(date.getTime());
}

// eu pessoalmente prefiro códigos one line, como no comentário abaixo
// export const dateToUnixTimestamp = (date: Date): number => Math.floor(date.getTime())

export const unixTimestampToDate = (timestamp: number): Date => {
  return new Date(timestamp);
}
// export const unixTimestampToDate = (timestamp: number): Date => new Date(timestamp)

// ou melhor ainda, converta este código para uma composable! <3
