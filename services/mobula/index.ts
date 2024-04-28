import type { $Fetch } from 'ofetch';

import type {
  CryptoHistoryQuery,
  CryptoQuery,
  AllCryptocurrenciesQuery,
} from './types';

export default class MobulaService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  async getAnyCryptoPrice(query: CryptoQuery) {
    const { crypto } = query;

    return await this.fetch('/market/data', {
      method: 'GET',
      query: { asset: crypto }
    });
  }

  async getCryptoPriceHistory(query: CryptoHistoryQuery) {
    const { crypto, from } = query;

    return await this.fetch('/market/history', {
      method: 'GET',
      query: {
        asset: crypto,
        from
      }
    });
  }

  async getAllCryptocurrencies(query: AllCryptocurrenciesQuery = {}) {
    return await this.fetch('/all', {
      method: 'GET',
      query: { ...query }
    });
  }

  async searchCryptocurrencies(query: string) {
    if (!query.trim()) {
      query = 'Bitcoin';
    }

    return await this.fetch('/search', {
      method: 'GET',
      query: { input: query }
    });
  }
}
