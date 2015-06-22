
self.addEventListener('message', function(e) {
    var num = parseInt(e.data);

    //self.postMessage(getPrimes(num));
    //var message = 'Received: ' + e.data;
    self.postMessage(getPrimes(num));
});

function isPrime(n) {
    for ( var i = 2; i < Math.sqrt(n); i++ ) {
        if ( n % i === 0 ) return false;
    }

    return true;
}

function getPrimes(n) {
    var primes = [];

    var num = 2;

    while( primes.length < n ) {
        if ( isPrime(num) ) primes.push(num);

        num++;
    }

    return primes;
}
