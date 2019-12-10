import React, { memo } from 'react';
import clsx from 'clsx';

import { BaseComponentProps } from '../types';

type NumberToAmount = (number: number, options?: any) => string;

type AmountProps = {
  value?: string | number;
  precision?: number;
  minDigits?: number;
  symbol?: string;
  hideSymbol?: boolean;
  unsetDigits?: boolean;
  useGrouping?: boolean;
};

const numberToAmount: NumberToAmount = (
  number,
  {
    symbol = '',
    minDigits = undefined,
    hideSymbol = false,
    precision = 0,
    unsetDigits = false,
    useGrouping = true,
  } = {}
) => {
  if (number === null || number === undefined) return '';

  if (isNaN(number)) {
    throw new Error(`expect number but received ${number}`);
  }

  const options: any = {};

  if (!unsetDigits) {
    if (minDigits !== undefined) {
      options.minimumFractionDigits = minDigits;
      options.maximumFractionDigits = minDigits;
    } else {
      options.minimumFractionDigits = precision;
      options.maximumFractionDigits = precision;
    }
  }

  options.useGrouping = useGrouping;

  const value = new Intl.NumberFormat(undefined, options).format(number / Math.pow(10, precision));

  if (!hideSymbol && symbol) return `${value} ${symbol}`;

  return value;
};

const Amount: React.FC<AmountProps & BaseComponentProps> = ({
  component: Component = 'span',
  value,
  minDigits,
  precision = 12,
  symbol = 'KSM',
  hideSymbol = false,
  unsetDigits = false,
  useGrouping = true,
  className,
  ...other
}) => {
  if (value === undefined) return null;

  let tokenPrecision = precision;

  return (
    <Component className={clsx('amount', className)} {...other}>
      {numberToAmount(value as number, {
        symbol,
        hideSymbol,
        precision: tokenPrecision,
        unsetDigits,
        useGrouping,
        minDigits,
      })}
    </Component>
  );
};

export default Amount;
