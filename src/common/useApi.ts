import create, { SetState, State } from 'zustand';

import { ApiService } from '../services';

interface ApiState extends State {
  api: ApiService | null;
  isConnect: boolean;
  setApi(api: ApiService): void;
  setIsConnect(isConnect: boolean): void;
}

const [useApi] = create<ApiState>(
  (set: SetState<ApiState>): ApiState => ({
    api: null,
    isConnect: false,
    setApi: api => {
      set(state => {
        state.api = api;
      });
    },
    setIsConnect: isConnect => {
      set(state => {
        state.isConnect = isConnect;
      });
    },
  })
);

export default useApi;
