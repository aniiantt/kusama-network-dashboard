import { Observable } from 'rxjs';
import { WsProvider, ApiRx } from '@polkadot/api';

class ApiService {
  public endpoint: string;
  public provider: WsProvider;
  public api: ApiRx;
  public isApiConnect = false;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new WsProvider(endpoint);
    this.api = new ApiRx({ provider: this.provider });
  }

  public waitApiConnect() {
    return this.api.isConnected.toPromise();
  }

  public switchEndpoint(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new WsProvider(endpoint);
  }
}

export default ApiService;
