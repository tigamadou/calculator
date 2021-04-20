import calculate from '../../logic/calculate';

describe('calculate module tests', () => {
  test('Resets when operation is "AC"', () => {
    expect(calculate({
      total: 1,
      next: 1,
      operation: 'x',
    }, 'AC')).toEqual({
      total: '',
      next: '',
      operation: null,
    });
  });

  test('should change the positive and negative by clicking "+/-"', () => {
    expect(calculate({
      total: 10,
      next: '',
      operation: null,
    }, '+/-').total).toEqual('-10');
  });

  test('sets the operator to +', () => {
    expect(calculate({
      total: '',
      next: '',
      operation: '',
    }, '+').operation).toEqual('+');
  });

  test('sets the operator to -', () => {
    expect(calculate({
      total: '',
      next: '',
      operation: '',
    }, '-').operation).toEqual('-');
  });

  test('sets the operator to x', () => {
    expect(calculate({
      total: '',
      next: '',
      operation: '',
    }, 'x').operation).toEqual('x');
  });

  test('sets the operator to ÷', () => {
    expect(calculate({
      total: '',
      next: '',
      operation: '',
    }, '÷').operation).toEqual('÷');
  });

  test('returns the percentage with "%"', () => {
    expect(calculate({
      total: '',
      next: '50',
      operation: '',
    }, '%').next).toBe('0.5');
  });

  test('returns the result with "="', () => {
    expect(calculate({
      total: '50',
      next: '45',
      operation: '+',
    }, '=').total).toBe('95');
  });

  test('sets the next if the value provided is a number', () => {
    expect(calculate({
      total: '1',
      next: '',
      operation: '+',
    }, '1').next).toBe('1');
  });
});
