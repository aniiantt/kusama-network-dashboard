import React from 'react';

import { BaseComponentProps } from '../../types';

const PrimaryButton: React.FC<BaseComponentProps> = ({ ...other }) => {
  return <button className="button is-primary">Normal</button>;
};

export default PrimaryButton;
