import React from 'react';

import { BaseProps } from '../types';

type ExternalLinkProps = {
  to: string;
};

const ExternalLink: React.FC<ExternalLinkProps & BaseProps> = ({ to, children, ...other }) => {
  if (!to) {
    return null;
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};

export default ExternalLink;
