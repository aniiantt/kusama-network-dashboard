import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../../types';

const PrimaryButton: React.FC<React.PropsWithChildren<BaseComponentProps & React.HTMLProps<HTMLButtonElement>>> = ({
  component: Component = 'button',
  className,
  ...other
}) => {
  return <Component className={clsx('button is-primary', className)} {...other} />;
};

export default PrimaryButton;
