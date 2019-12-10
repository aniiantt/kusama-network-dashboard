import { map, switchMap } from 'rxjs/operators';
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

  public subscribeFreeBalance(address: string) {
    return this.api.query.balances.freeBalance<Balance>(address).pipe(
      map(freeBalance => {
        return {
          address: address,
          freeBalance: freeBalance.toString(),
        };
      })
    );
  }

  public subscribeNewHeads() {
    return this.api.rpc.chain.subscribeNewHeads().pipe(
      map(block => {
        return {
          blockHash: block.hash.toHex(),
          blockNumber: block.number.toString(),
        };
      })
    );
  }

  public queryBlockDetail(blockNumber: number) {
    return this.api.rpc.chain.getBlockHash(blockNumber).pipe(
      switchMap(blockHash => {
        return this.api.rpc.chain.getBlock(blockHash);
      }),
      map(block => {
        return {
          blockHash: block.block.hash.toHex(),
          blockNumber: block.block.header.number.toString(),
        };
      })
    );
  }
}

export default ApiService;
