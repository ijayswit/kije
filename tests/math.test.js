const { add, subtract, multiply, divide } = require('../src/math.js')

test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(99)
})

test('should subtract two numbers correctly', () => {
    expect(subtract(10, 5)).toBe(5)
})

test('should multiply two numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12)
})

test('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5)
})

test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
})