// Tribonacci
// T(n) = T(n-3) + T(n-2) + T(n-1)

// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.
// RECURSIVELY:
function tribonacci(num){
    if (num===0) return 0
    if (num===1) return 1
    if (num===2) return 1
    return tribonacci(num-3) + tribonacci(num-2) + tribonacci(num-1)
}

console.log(tribonacci(10))