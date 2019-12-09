import create, { SetState, State } from 'zustand';

import { ApiService } from '../services';

interface ApiState extends State {
  api: ApiService | null;
  setApi(api: ApiService): void;
}

const [useApi] = create<ApiState>(
  (set: SetState<ApiState>): ApiState => ({
    api: null,
    setApi: api => {
      set(state => {
        state.api = api;
      });
    },
  })
);

export default useApi;
