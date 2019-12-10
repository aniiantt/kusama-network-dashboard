import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInput, PrimaryButton, DefaultButton } from '../../components';

const SearchAddress: React.FC = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="field has-addons search-field">
      <SearchInput
        className="is-expanded"
        value={inputValue}
        onChange={value => setInputValue(value)}
        onSearch={() => {
          if (inputValue) setLoading(true);
        }}
        disabled={loading}
        isLoading={loading}
        placeholder={t('base:query_balance')}
      />
      <div className="control">
        {loading ? (
          <DefaultButton
            className="is-light"
            onClick={() => {
              setLoading(false);
            }}
          >
            {t('base:cancel')}
          </DefaultButton>
        ) : (
          <PrimaryButton
            onClick={() => {
              if (inputValue) setLoading(true);
            }}
          >
            {t('base:search')}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default SearchAddress;
