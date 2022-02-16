# Problem statement

Given a sorted array with distinct integer values, sort the array in a wave-like fasion.
In other words, arrange the integers in a sequence such that:
arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5] ... etc

# Examples
input: [1, 2, 3, 4, 5]
output: [2, 1, 4, 3, 5]

input: [2, 4, 7, 8 , 9, 10]
output: [4, 2, 8, 7, 10, 9]

# Notes
max array size: 30
min array size: 3

time complexity: at least as fast as O(n^2)
space complexity: I don't care

will integers ever be negative: yes
will integers ever be zero: yes

language: any
built in tools: yes
