import React from 'react';

import { useApi } from '../../common';
import { useTranslation } from 'react-i18next';
import BlockList from './BlockList';

const Home: React.FC = () => {
  const { api, isReady } = useApi();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="sub-title">{t('base:blocks_title')}</div>
      <div className="sss">
        <div>
          <BlockList />
        </div>
      </div>
    </div>
  );
};

export default Home;
