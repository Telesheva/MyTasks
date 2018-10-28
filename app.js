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
})();