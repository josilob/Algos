# Ugly Number

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

```js
Example 1:

Input: 6
Output: true
// Explanation: 6 = 2 × 3
```

```js
Example 2:
Input: 8
Output: true
// Explanation: 8 = 2 × 2 × 2
```

```js
Example 3:
Input: 14
Output: false
// Explanation: 14 = 7 x 2.
// Explanation: 14 is not ugly since it includes another prime factor 7.
```

### Note:

1 is typically treated as an ugly number.

- An ugly number refers to a positive integer that contains only prime factors 2, 3, and 5.

- According to the definition, we divide the given number by 2, 3, 5 (the order does not matter) until it cannot be divided. If you get 1, it means that all factors are 2 or 3 or 5, if it is not 1, it is not an ugly number.

```js
/**
 * @param {number} num
 * @return {boolean}
 */

let isUgly = function (num) {};

// TEST:

// for(let i = 1; i < 30; i += 1) {
//   console.log(`num: ${i}`, isUgly(i))
// }
```

Use the below as a reference to determine if your code is working correctly.

```js
num: 1 true
num: 2 true
num: 3 true
num: 4 true
num: 5 true
num: 6 true
num: 7 false
num: 8 true
num: 9 true
num: 10 true
num: 11 false
num: 12 true
num: 13 false
num: 14 false
num: 15 true
num: 16 true
num: 17 false
num: 18 true
num: 19 false
num: 20 true
num: 21 false
num: 22 false
num: 23 false
num: 24 true
num: 25 true
num: 26 false
num: 27 true
num: 28 false
num: 29 false
num: 30 true
```
