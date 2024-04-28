import InternalService from '~/services/internal/transactions';
import MobulaService from '~/services/mobula';

interface IHttp {
  mobula: MobulaService;
  api: InternalService;
}

function createMobulaFetcher(apiKey: string) {
  return $fetch.create({
    baseURL: 'https://api.mobula.io/api/1',
    onRequest({ options }) {
      const authHeader = {
        Authorization: apiKey,
        'Content-Type': 'application/json'
      };

      options.headers = Object.assign(authHeader, options.headers);
    }
  });
}

function createInternalFetcher() {
  return $fetch.create({
    baseURL: 'http://localhost:3000/api/',
    onRequest({ options }) {
      const token = localStorage.getItem('token');
      if (token) {
        const authHeader = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        };
        options.headers = Object.assign(authHeader, options.headers);
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        const toast = useToast();
        const router = useRouter();

        toast.add({
          title: 'Session expired',
          description: 'Please login again',
        });

        router.push('/login');
      }
    }
  });
}

const plugin = async () => {
  const { public: { MOBULA_API_KEY } } = useRuntimeConfig();

  const mobulaFetcher = createMobulaFetcher(MOBULA_API_KEY);
  const internalFetcher = createInternalFetcher();

  const httpServices: IHttp = {
    mobula: new MobulaService(mobulaFetcher),
    api: new InternalService(internalFetcher)
  };

  return { provide: { http: httpServices }};
};

export default plugin;
