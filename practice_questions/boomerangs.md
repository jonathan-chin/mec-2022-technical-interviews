# Number of Boomerangs

Definition: a boomerang is a subarray of 3 items where the first and last items are equal but not to the middle one.

examples:
[3, 7, 3] and [5,-3,5] are both boomerangs
[4, 6, 3] is not a boomerang

# Task
write a function that, given an array of N length, returns the total number of boomerangs in that array.

example:
[3, 7, 3, 7] => 2
[4, 3, 4, 8, 5, 8] => 2



# Notes
[1, 1, 1, 1, 1, 1] => 0
[4, 1, 7, 1, 4, 2] => 1

min max array size: min is 3, max is 100
min max array values: none (infinite)

time complexity: O(n)
space complexity: O(1)

iterate through array, stop at length - 2
increment by 1
initialize count = 0
inside for loop:
	check if array[i] === array[i + 2] && array[i] !== array[i + 1]
	then increment count
return count

