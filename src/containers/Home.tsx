import React from 'react';

import { useApi } from '../common';

import { Layout } from './layout';

const Home: React.FC = () => {
  const { api } = useApi();
  console.log(api);
  return <Layout></Layout>;
};

export default Home;
