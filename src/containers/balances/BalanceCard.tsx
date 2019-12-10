import React from 'react';
import clsx from 'clsx';

import { BaseComponentProps } from '../../types';

type BalanceCardProps = {
  title: string;
};

const BalanceCard: React.FC<React.PropsWithChildren<BalanceCardProps & BaseComponentProps>> = ({
  title,
  className,
  children,
  ...other
}) => {
  return (
    <div className={clsx('card', className)} {...other}>
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default BalanceCard;
