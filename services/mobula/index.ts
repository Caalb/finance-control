import type { $Fetch } from "ofetch";
import type { 
  CryptoHistoryQuery, 
  CryptoQuery
 } from './types'

export default class MobulaService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  getAnyCryptoPrice(query: CryptoQuery) {
    const { crypto } = query;
    
    return this.fetch('/market/data', {
      method: 'GET',
      query: { asset: crypto }
    });
  }

  getCryptoPriceHistory(query: CryptoHistoryQuery) {
    const { crypto, from } = query;
    
    return this.fetch('/market/history', {
      method: 'GET',
      query: { asset: crypto, from }
    });
  }
}
