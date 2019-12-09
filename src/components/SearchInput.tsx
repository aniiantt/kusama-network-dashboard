import React from 'react';
import clsx from 'clsx';

import { BaseComponentProps } from '../types';

type SearchInputProps = {
  isLoading: boolean;
};

const SearchInput: React.FC<BaseComponentProps & SearchInputProps & React.HTMLProps<HTMLInputElement>> = ({
  component: Component = 'div',
  className,
  style,
  isLoading,
  ...other
}) => {
  return (
    <Component className={clsx('control', { 'is-loading': isLoading }, className)} style={style}>
      <input className="input is-rounded" type="search" {...other} />
    </Component>
  );
};

// pseudo = '-webkit-search-cancel-button';

export default SearchInput;
