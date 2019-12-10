import React from 'react';
import { useTranslation } from 'react-i18next';

type BalanceCardProps = {
  title: string;
};

const BalanceCard: React.FC<BalanceCardProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
