
function isPrime(num) {
    for ( var i = 2; i < Math.sqrt(num); i++ ) {
        if ( num % i === 0 ) return false;
    }

    return true;
}

function getPrimes(n) {
    var primes = [];
    var curr = 2;

    while ( primes.length < n ) {
        if ( isPrime(curr) ) primes.push(curr);

        curr++;
    }

    return primes;
}

function benchmark(min, max) {
    var curr = min;
    var results = [];
    for ( var i = min; i <= max; i += curr ) {
        var duration = new Date();
        getPrimes(i);
        duration = new Date() - duration;
        var obj = { number_of_primes: i, duration: duration };

        results.push(obj);
    }

    return results;
}

self.addEventListener('message', function(e) {
    var min = parseInt(e.data.min);
    var max = parseInt(e.data.max);

    self.postMessage(benchmark(min, max));
});