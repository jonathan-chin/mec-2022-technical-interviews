# Problem

Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.


# Example 1:

Input:
N = 6
arr[] = {3,0,0,2,0,4}
Output:
10


# Example 2:

Input:
N = 4
arr[] = {7,4,0,9}
Output:
10
Explanation:
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.

# Example 3:

Input:
N = 3
arr[] = {6,9,9}
Output:
0
Explanation:
No water will be trapped.


-----

# notes

will the integers ever be negative? no
will the integers be zero? yes
will there be any decimals? no
can any number repeated twice? yes
what is the max number? 20

will the array ever be empty? no
what is the max number of elements? 100
what is the min number of elements? 3

will the last element in the array always be the largest? no

# explanation / plan for solution

we want the water in the trenches

in order for water to be stored in these spaces, there needs to be higher bars on the left and right than in the middle. so for water to be stored, the left and right have to be higher than the middle.

look at 3 elements a time
look at n and n + 2
	if n + 1 is less than both values


what if the trough spans more than 3 elements?
	take n, look at n + 1 if it is smaller
	keep doing that until the previous element is less than
	other words: loop through, traverse, recursion, base case, stack, queue


track the smallest current height

# proposed solution

1. first tower is tallest_so_far (TSF)
2. traverse to next tower
   if smaller, subtract and keep as Total Water (TW), go back to 1
   if larger, set it as TSF, go back to 1
  
# proposed solution 2
1. starting with the first tower, find a trench
   finding a trench means move right until you hit a tower => your current tower
2. calculate water inside
   this means for each tower inbetween, subtract its height from the smaller of the two side towers
3. repeat for all towers

# Jamboard Visualization

[https://jamboard.google.com/d/1WUj24HDyONiVFyNaHjs9NoYPv4AH33p5IezLBxA5F_s/edit?usp=sharing](https://jamboard.google.com/d/1WUj24HDyONiVFyNaHjs9NoYPv4AH33p5IezLBxA5F_s/edit?usp=sharing)
