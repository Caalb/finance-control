export interface CryptoQuery {
  crypto: string;
}

export interface CryptoHistoryQuery extends CryptoQuery {
  from: number;
}