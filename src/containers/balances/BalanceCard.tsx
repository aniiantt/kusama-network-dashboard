import React from 'react';
import clsx from 'clsx';
import { Observable } from 'rxjs';

import { BaseComponentProps } from '../../types';
import { useObservable } from '../../common';
import { Amount } from '../../components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

type BalanceCardProps = {
  address: string;
  balance?: Observable<{
    address: string;
    freeBalance: string;
  }>;
  onRemove?(address?: string): void;
};

const BalanceCard: React.FC<React.PropsWithChildren<BalanceCardProps & BaseComponentProps>> = ({
  address,
  className,
  children,
  balance,
  onRemove = x => x,
  ...other
}) => {
  const data = useObservable(balance);

  return (
    <div className={clsx('card', className)} {...other}>
      <header className="card-header">
        <p className="card-header-title">{address}</p>
        <div className="card-header-icon" onClick={() => onRemove(address)}>
          <CloseIcon />
        </div>
      </header>
      <div className="card-content">
        <Amount value={data?.freeBalance}></Amount>
      </div>
    </div>
  );
};

export default BalanceCard;
