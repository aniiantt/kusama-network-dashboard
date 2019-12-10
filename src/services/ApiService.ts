import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WsProvider, ApiRx } from '@polkadot/api';
import { Balance } from '@polkadot/types/interfaces';

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

  public waitApiReady() {
    return this.api.isReady.toPromise();
  }

  public switchEndpoint(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new WsProvider(endpoint);
  }

  public queryFreeBalance(address: string) {
    return this.api.query.balances.freeBalance<Balance>(address).pipe(
      map(freeBalance => {
        return {
          address: address,
          freeBalance: freeBalance.toString(),
        };
      })
    );
  }
}

export default ApiService;
