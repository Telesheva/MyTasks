(() => {
    'use strict';

    //Task 1 (check if the number is prime)
    function isPrime(number) {
        if (number === 1) {
            return false;
        }
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                console.log(number + ' - the number is not prime');
                return false;
            }
        }
        console.log(number + ' - the number is prime');
        return true;
    }

    isPrime(20);

    //Task 2 (factorial)
    function factorial(num)
    {
        if (num < 0) {
            return -1;
        }
        else if (num === 0) {
            return 1;
        }
        else {
            let fact = num * factorial(num - 1);
            console.log(fact);
            return fact;
        }
    }
factorial(4);
})();