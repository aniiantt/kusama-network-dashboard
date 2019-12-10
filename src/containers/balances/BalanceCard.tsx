import React from 'react';
import clsx from 'clsx';
import { Observable } from 'rxjs';

import { BaseComponentProps } from '../../types';
import { useObservable } from '../../common';
import { Amount } from '../../components';

type BalanceCardProps = {
  title: string;
  balance?: Observable<{
    address: string;
    freeBalance: string;
  }>;
};

const BalanceCard: React.FC<React.PropsWithChildren<BalanceCardProps & BaseComponentProps>> = ({
  title,
  className,
  children,
  balance,
  ...other
}) => {
  const data = useObservable(balance);

  return (
    <div className={clsx('card', className)} {...other}>
      <header className="card-header">
        <p className="card-header-title">{title}</p>
        <button className="delete"></button>
      </header>
      <div className="card-content">
        <Amount value={data?.freeBalance}></Amount>
      </div>
    </div>
  );
};

export default BalanceCard;
