const coffeeMachine = require('./coffeeMachine.js'); // Adjust the import path as needed

describe('coffeeMachine', () => {
    test('should return the correct change when sufficient payment is made for americano', () => {
        const paidCoins = "50,20,25";
        const coffeeType = "americano";
        const expectedChange = 0; // Total paid: 95, Price: 95, Change: 50
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should return the correct change when sufficient payment is made for latte', () => {
        const paidCoins = "100,50";
        const coffeeType = "latte";
        const expectedChange = 24; // Total paid: 150, Price: 126, Change: 24
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should return the correct change when sufficient payment is made for cappuccino', () => {
        const paidCoins = "100,100,50";
        const coffeeType = "cappuccino";
        const expectedChange = 17; // Total paid: 250, Price: 233, Change: 17
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should return undefined when not enough money is paid', () => {
        const paidCoins = "50,20";
        const coffeeType = "americano";
        expect(coffeeMachine(paidCoins, coffeeType)).toBeUndefined(); // Total paid: 70, Price: 95
    });

    test('should return undefined for invalid coffee type', () => {
        const paidCoins = "100,50";
        const coffeeType = "espresso";
        expect(coffeeMachine(paidCoins, coffeeType)).toBeUndefined(); // Invalid coffee type
    });

    test('should return 0 when exact amount is paid', () => {
        const paidCoins = "95";
        const coffeeType = "americano";
        const expectedChange = 0; // Total paid: 95, Price: 95, Change: 0
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should handle case-insensitive coffee type', () => {
        const paidCoins = "126";
        const coffeeType = "Latte"; // Mixed case
        const expectedChange = 0; // Total paid: 126, Price: 126, Change: 0
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should return 0 when exact amount is paid for cappuccino', () => {
        const paidCoins = "100,100,33";
        const coffeeType = "cappuccino";
        const expectedChange = 0; // Total paid: 233, Price: 233, Change: 0
        expect(coffeeMachine(paidCoins, coffeeType)).toBe(expectedChange);
    });

    test('should throw error when input coins are not valid numbers', () => {
        const paidCoins = "50,invalid,10";
        const coffeeType = "americano";
        expect(() => coffeeMachine(paidCoins, coffeeType)).toThrow();
    });
});
