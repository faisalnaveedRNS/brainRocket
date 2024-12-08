function coffeeMachine(paidCoins, coffeeType) {

    // Coffee prices in cents
    const coffeePrices = {
        americano: 95, // 0.95 dollars = 95 cents
        latte: 126,    // 1.26 dollars = 126 cents
        cappuccino: 233 // 2.33 dollars = 233 cents
    };


    // Get the price of the selected coffee in cents
    const coffeePrice = coffeePrices[coffeeType.toLowerCase()];

    if (!coffeePrice) {
        return
    }

    const coins = paidCoins.split(',');

    coins.forEach(coin => {
        const n = Number(coin);
        if (!n && isNaN(n)) {
            throw new Error("invalid coins");
        }
    });



    // Convert paidCoins from a string to an array of integers (cents)
    const coinsArray = paidCoins.split(',').map(coin => parseInt(coin.trim(), 10));

    // Calculate total paid in cents
    const totalPaid = coinsArray.reduce((sum, coin) => sum + coin, 0);



    // Check if the total paid is enough to buy the coffee
    if (totalPaid < coffeePrice) {
        return;
    }

    // Calculate the change (in cents)
    const change = totalPaid - coffeePrice;

    return change;

}

module.exports = coffeeMachine;