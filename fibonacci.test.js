const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
    test('should return "0" for n = 0', () => {
        expect(fibonacci(0)).toBe("0");
    });

    test('should return "0,1" for n = 1', () => {
        expect(fibonacci(1)).toBe("0,1");
    });

    test('should return "0,1,1" for n = 2', () => {
        expect(fibonacci(2)).toBe("0,1,1");
    });

    test('should return "0,1,1,2" for n = 3', () => {
        expect(fibonacci(3)).toBe("0,1,1,2");
    });

    test('should return "0,1,1,2,3" for n = 4', () => {
        expect(fibonacci(4)).toBe("0,1,1,2,3");
    });

    test('should return "0,1,1,2,3,5" for n = 5', () => {
        expect(fibonacci(5)).toBe("0,1,1,2,3,5");
    });

    test('should handle larger numbers correctly, e.g., n = 10', () => {
        expect(fibonacci(10)).toBe("0,1,1,2,3,5,8,13,21,34,55");
    });

    test('should handle negative input by returning an empty string', () => {
        expect(fibonacci(-1)).toBe("");
    });

    test('should handle non-integer input by returning an empty string', () => {
        expect(fibonacci(2.5)).toBe("");
        expect(fibonacci("five")).toBe("");
        expect(fibonacci(null)).toBe("");
    });
});
