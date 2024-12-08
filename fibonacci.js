function fibonacci(n) {


    if (n == 0) {
        return "0"
    }
    if (!n || !Number.isInteger(n)) {
        return ""
    }
    let first = 0;
    let second = 1;

    let fib = [];

    if (n == 1) {
        fib.push(0);
        fib.push(1);
    } else if (n > 1) {

        fib.push(0);
        fib.push(1);
        for (let index = 2; index <= n; index++) {
            let next = first + second;
            fib.push(next);
            first = second;
            second = next;
        }
    }

    return fib.join(",");

}


module.exports = fibonacci;