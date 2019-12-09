export type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
  render?: (value?: any) => React.ReactNode;
};

export type BaseComponentProps = BaseProps & {
  component?: React.ReactType<any>;
};

export type Identity = <T>(arg: T) => T;
