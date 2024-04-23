import MobulaService from '~/services/mobula';

interface IHttp {
  mobula: MobulaService;
}

export default defineNuxtPlugin(async () => {
  const { public: { MOBULA_API_KEY } } = useRuntimeConfig();
  const fetcher = $fetch.create({
    baseURL: 'https://api.mobula.io/api/1',
    onRequest({ options }) {
      const authHeader = {
        Authorization: MOBULA_API_KEY,
        'Content-Type': 'application/json'
      };

      options.headers = Object.assign(authHeader, options.headers);
    }
  });

  const httpServices: IHttp = {
    mobula: new MobulaService(fetcher)
  };

  return {
    provide: {
      http: httpServices
    }
  };
});
