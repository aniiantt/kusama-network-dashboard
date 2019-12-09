import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './layout';
import { Spinner } from '../components';
import { ApiService } from '../services';
import { useApi } from '../common';
import { KUSAMA_RPC } from './constants';

import Routes from './Routes';

const App: React.FC = () => {
  const { isReady, setApiService, setIsReady } = useApi();

  useEffect(() => {
    const apiService = new ApiService(KUSAMA_RPC);

    setApiService(apiService);

    const waitApiReady = async () => {
      await apiService.waitApiReady();
      setIsReady(true);
    };

    waitApiReady();
  }, [ApiService]);

  return (
    <Router>
      <Layout>{isReady ? <Routes /> : <Spinner />}</Layout>
    </Router>
  );
};

export default App;
