function numberFormat(value: string | number, options?: any): string {
  if (isNaN(value as number)) return '';

  return new Intl.NumberFormat(undefined, { useGrouping: true, ...options }).format(value as number);
}

export default numberFormat;
