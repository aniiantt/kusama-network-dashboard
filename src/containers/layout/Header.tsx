import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ExternalLink } from '../../components';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="navbar has-shadow has-background-black">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="site-logo" src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="navbar-ksm">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              {t('header:home')}
            </Link>
            <Link to="/balances" className="navbar-item">
              {t('header:balances')}
            </Link>
          </div>
          <div className="navbar-end">
            <ExternalLink to="https://github.com" className="navbar-link is-arrowless">
              <GithubIcon />
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
