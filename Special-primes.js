/*
A special type of prime is generated by the formula p = 2^m * 3^n + 1 where m and n can be any non-negative integer.
The first 5 of these primes are 2, 3, 5, 7, 13, and are generated as follows:
  2 = 2^0 * 3^0 + 1
  3 = 2^1 * 3^0 + 1
  5 = 2^2 * 3^0 + 1
  7 = 2^1 * 3^1 + 1
  13 = 2^2 * 3^1 + 1
  ..and so on

You will be given a range and your task is to return the number of primes that have this property. 
For example, solve(0,15) = 5, because there are only 5 such primes >= 0 and < 15; they are 2,3,5,7,13. 
The upper limit of the tests will not exceed 1,500,000.
*/


// Solution

(_=>{
  let set = new Set()
  function isPrime(n) {
    if (n <= 3) return n >= 2
    if (n % 2 == 0) return false
    let p = 3
    while (p * p <= n) {
      if (n % p == 0) return false
      p += 2
    }
    return true
  }
  for (let m = 0; m <= 21; ++m) {
    for (let n = 0; n <= 16; ++n) {
      let p = 2 ** m * 3 ** n + 1
      if (isPrime(p)) set.add(p)
    }
  }
  global.array = [...set].sort((a,b) => a-b)
})()

function solve(x,y) {
  return global.array.filter(a => a >= x && a < y).length
}

// or

function solve(x, y) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const list = [];

  for (let m = 0; m <= 18; m+= 1) {
    for (let n = 0; n <= 10; n += 1) {
      let number = 2 ** m * 3 ** n + 1;
      if (isPrime(number)) list.push(number);
    }
  }
  return list.filter(num => num >= x && num < y).length;
}