import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInput, PrimaryButton } from '../../components';

const SearchAddress: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="field has-addons search-field">
      <SearchInput className="is-expanded" isLoading={true} placeholder={t('base:query_balance')} />
      <div className="control">
        <PrimaryButton>{t('base:search')}</PrimaryButton>
      </div>
    </div>
  );
};

export default SearchAddress;
