import { numberFormat } from '..';

describe('number format', () => {
  it('use group', () => {
    expect(numberFormat(1111)).toBe('1,111');
  });

  it('minimumFractionDigits', () => {
    expect(
      numberFormat(1111, {
        minimumFractionDigits: 2,
      })
    ).toBe('1,111.00');
  });
});
