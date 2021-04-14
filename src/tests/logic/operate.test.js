import operate from '../../logic/operate';

describe('operate module tests', () => {
  test('returns the result of the operation +', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });
  test('returns the result of the operation -', () => {
    expect(operate('1', '1', '-')).toBe('0');
  });
  test('returns the result of the operation X', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  test('returns the result of the operation ÷', () => {
    expect(operate('10', '5', '÷')).toBe('2.0');
  });

  test('should return 0', () => {
    expect(operate()).toBe('0');
  });
});
