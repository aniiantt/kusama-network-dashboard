import React from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInput, PrimaryButton, DefaultButton } from '../../components';

type SearchAddressProps = {
  value?: string;
  loading?: boolean;
  errorMsg?: string;
  onSearch?(value: string): void;
  onChange?(value: string): void;
  onCancel?(value?: string): void;
};

const SearchAddress: React.FC<SearchAddressProps> = ({
  value: inputValue = '',
  loading = false,
  errorMsg = '',
  onChange = x => x,
  onCancel = x => x,
  onSearch = x => x,
}) => {
  const { t } = useTranslation();

  return (
    <div className="field has-addons search-field">
      {errorMsg && <div className="control has-text-danger search-error-msg">{errorMsg}</div>}
      <SearchInput
        className="is-expanded"
        value={inputValue}
        onChange={value => onChange(value)}
        onSearch={() => {
          if (inputValue) onSearch(inputValue);
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
              console.log('cancel');
              onCancel();
            }}
          >
            {t('base:cancel')}
          </DefaultButton>
        ) : (
          <PrimaryButton
            onClick={() => {
              if (inputValue) onSearch(inputValue);
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
