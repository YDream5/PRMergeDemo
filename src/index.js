/**
 * PRMergeDemo - Main entry point
 * A simple calculator module for demo purposes
 */

class Calculator {
  constructor() {
    this.history = [];
  }

  /**
   * Add two numbers
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    const result = a + b;
    this.history.push({ operation: 'add', args: [a, b], result });
    return result;
  }

  /**
   * Subtract two numbers
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  subtract(a, b) {
    const result = a - b;
    this.history.push({ operation: 'subtract', args: [a, b], result });
    return result;
  }

  /**
   * Multiply two numbers
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  multiply(a, b) {
    const result = a * b;
    this.history.push({ operation: 'multiply', args: [a, b], result });
    return result;
  }

  /**
   * Divide two numbers
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @throws {Error} when dividing by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    const result = a / b;
    this.history.push({ operation: 'divide', args: [a, b], result });
    return result;
  }

  /**
   * Get calculation history
   * @returns {Array}
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Clear calculation history
   */
  clearHistory() {
    this.history = [];
  }
}

module.exports = Calculator;
