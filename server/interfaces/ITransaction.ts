export interface ITransactionOperations {
  transaction_id: string;
  user_id: number;
}

export interface IUpdateTransaction extends ITransactionOperations {
  amount: number;
  transaction_type: string;
}

export interface ICreateTransaction {
  amount: number;
  transaction_type: string;
  user_id: number;
}
