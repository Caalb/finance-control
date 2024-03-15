export interface CryptoQuery {
  crypto: string;
}

export interface AllCryptocurrenciesQuery {
  query?: string;
}

export interface CryptoHistoryQuery extends CryptoQuery {
  from: number;
}