import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './layout';
import { ApiService } from '../services';
import { useApi } from '../common';
import Routes from './Routes';

const App: React.FC = () => {
  const { isConnect, setApi, setIsConnect } = useApi();

  useEffect(() => {
    const api = new ApiService('wss://kusama-rpc.polkadot.io/');
    setApi(api);

    const subscription = api.api.isConnected.subscribe(isConnect => {
      setIsConnect(isConnect);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Layout>{isConnect ? <Routes /> : null}</Layout>
    </Router>
  );
};

export default App;
