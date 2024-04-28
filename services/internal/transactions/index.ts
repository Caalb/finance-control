import type { $Fetch } from 'ofetch';


export default class InternalService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  async getTransactions () {
    return await this.fetch('/transactions', {
      method: 'GET',
    });
  }
}
