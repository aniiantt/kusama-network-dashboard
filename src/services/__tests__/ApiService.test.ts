import { ApiService } from '..';

describe('api service', () => {
  jest.setTimeout(300000);

  const apiService = new ApiService('wss://kusama-rpc.polkadot.io/');

  beforeEach(async () => {
    await apiService.waitApiReady();
    console.log('哈哈哈哈23123123');
  });

  xit('subscribe freeBalance', done => {
    apiService
      .subscribeFreeBalance('CzsYKscQXB7ZfKc5iQ4qVwagswbxo1rEcqLSGXkviHpaqqK')
      .toPromise()
      .then(data => {
        expect(data.freeBalance).toBeDefined();
        expect(data.address).toBeDefined();
        console.log('哈哈哈哈1111');

        done();
      });
  });
});
