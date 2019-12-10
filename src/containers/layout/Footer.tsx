import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ExternalLink } from '../../components';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="site-foot-nav-left">
          <Link to="/">{t('footer:desc')}</Link>
          <span> | </span>
          <ExternalLink to="mailto:nxiiun@gmail.com">{t('footer:aboutme')}</ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
