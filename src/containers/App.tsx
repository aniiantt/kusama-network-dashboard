import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApiService } from '../services';
import { useApi } from '../common';
import Routes from './Routes';

const App: React.FC = () => {
  const { setApi } = useApi();

  useEffect(() => {
    const api = new ApiService('wss://kusama-rpc.polkadot.io/');
    setApi(api);
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
