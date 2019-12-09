import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="site-foot">
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">
          <Link to="/">{t('footer:desc')}</Link>
          <span className="site-foot-nav-left">{t('footer:aboutme')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
