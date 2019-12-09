import { Observable } from 'rxjs';
import { WsProvider, ApiRx } from '@polkadot/api';

class Api {
  public endpoint: string;
  public provider: WsProvider;
  public api$: Observable<ApiRx>;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new WsProvider(endpoint);
    this.api$ = ApiRx.create({ provider: this.provider });
  }

  switchEndpoint(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new WsProvider(endpoint);
  }
}

export default Api;
