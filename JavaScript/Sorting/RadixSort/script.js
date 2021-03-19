// RADIX SORT
// special sorting algorithm that works on list of numbers
// It never makes comparisons between elements but it exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means bigger number. And we sort numbers in buckets based on this, as many times as the largest number has digits.

// To implement the radix sort, it's helpful to start with a few helper functions first:

// getDigit(num,place) - returns the digit in num at the given place value
// getDigit(12345,0) //=>5
// getDigit(12345,4) //=>1
// getDigit(7323,0) //=>3
// getDigit(7323,2) //=>3
// getDigit(7323,1) //=>2
// getDigit(7323,3) //=>7

