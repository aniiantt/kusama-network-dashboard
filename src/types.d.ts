export type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type BaseComponentProps = BaseProps & {
  component?: React.ReactType<any>;
};
