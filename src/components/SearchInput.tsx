import React from 'react';
import clsx from 'clsx';

import { BaseComponentProps } from '../types';

type SearchInputProps = {
  isLoading: boolean;
  onChange?(value: string): void;
  onSearch?(value: string): void;
};

const SearchInput: React.FC<BaseComponentProps &
  SearchInputProps &
  Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>> = ({
  component: Component = 'div',
  className,
  style,
  onChange = (x: string) => x,
  onSearch = (x: string) => x,
  isLoading,
  ...other
}) => {
  return (
    <Component className={clsx('control', { 'is-loading': isLoading }, className)} style={style}>
      <input
        className="input"
        type="search"
        onChange={e => onChange(e.target.value)}
        onKeyUp={e => {
          // press enter
          if (e.keyCode === 13) {
            onSearch((e.target as HTMLInputElement).value);
          }
        }}
        {...other}
      />
    </Component>
  );
};

export default SearchInput;
