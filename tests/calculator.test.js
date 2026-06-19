const Calculator = require('../src/index');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calc.add(-1, -2)).toBe(-3);
    });

    test('should add zero', () => {
      expect(calc.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });

    test('should handle negative result', () => {
      expect(calc.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });

    test('should handle zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('should throw error for division by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
  describe('power', () => {
    test('should calculate base raised to exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
    });#dddddd

    test('should handle exponent of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(calc.power(2, -1)).toBe(0.5);
    });
  });

  
  describe('history', () => {
    test('should track calculation history', () => {
      calc.add(1, 2);
      calc.multiply(3, 4);

      const history = calc.getHistory();
      expect(history).toHaveLength(2);
      expect(history[0].operation).toBe('add');
      expect(history[1].operation).toBe('multiply');
    });

    test('should clear history', () => {
      calc.add(1, 2);
      calc.clearHistory();

      expect(calc.getHistory()).toHaveLength(0);
    });
  });
});
