import React from 'react';

import { BaseComponentProps } from '../../types';

const PrimaryButton: React.FC<React.PropsWithChildren<BaseComponentProps & React.HTMLProps<HTMLButtonElement>>> = ({
  component: Component = 'button',
  ...other
}) => {
  return <Component className="button is-primary" {...other} />;
};

export default PrimaryButton;
