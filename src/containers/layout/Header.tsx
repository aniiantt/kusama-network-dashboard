import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="site-head">
      <div className="container">
        <div className="site-mast">
          <div className="site-mast-left">
            <Link to="/">
              <img className="site-logo" src="/images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="site-link">
            <div className="site-link-item">
              <Link to="/">{t('header:home')}</Link>
            </div>
            <div className="site-link-item">
              <Link to="/balances">{t('header:balances')}</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
