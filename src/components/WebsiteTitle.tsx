import React from 'react';

import Helmet from 'react-helmet';

type WebsiteTitleProps = {
  title: string;
};

const WebsiteTitle: React.FC<WebsiteTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default WebsiteTitle;
