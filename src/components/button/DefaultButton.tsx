import React from 'react';
import clsx from 'clsx';
import { BaseComponentProps } from '../../types';

const DefaultButton: React.FC<React.PropsWithChildren<BaseComponentProps & React.HTMLProps<HTMLButtonElement>>> = ({
  component: Component = 'button',
  className,
  ...other
}) => {
  return <Component className={clsx('button', className)} {...other} />;
};

export default DefaultButton;
