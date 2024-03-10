import type { $Fetch } from "ofetch";

export default class MobulaService {
  private fetch: $Fetch;

  constructor(fetch: any) {
    this.fetch = fetch;
  }

  async getAnyCryptoPrice({ crypto }: { crypto: string }) {
    return await this.fetch('/market/data', {
      method: 'GET',
      query: { asset: crypto }
    })
  }
} 