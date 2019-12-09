import create, { SetState, State } from 'zustand';

import { ApiService } from '../services';

interface ApiState extends State {
  apiService: ApiService | null;
  isReady: boolean;
  setApiService(api: ApiService): void;
  setIsReady(isReady: boolean): void;
}

const [useApi] = create<ApiState>(
  (set: SetState<ApiState>): ApiState => ({
    apiService: null,
    isReady: false,
    setApiService: apiService => {
      set(state => {
        state.apiService = apiService;
      });
    },
    setIsReady: isReady => {
      set(state => {
        state.isReady = isReady;
      });
    },
  })
);

export default useApi;
