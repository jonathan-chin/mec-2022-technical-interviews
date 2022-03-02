// problem statement: https://practice.geeksforgeeks.org/problems/josephus-problem/1/?page=1&category[]=Recursion&sortBy=submissions

function safe_spot(n, k){
    let circle = [];
    for(let index = 1; index <= n; index++){
	circle.push(index);
    }
    console.log(circle);
    const new_circle = eliminate_element(circle, k, n - 1);
    console.log(new_circle);
}

function eliminate_element(circle, k, starting_position){
    if(circle.length === 1){
	return circle[0];
    }
    const temp_starting_position = (starting_position + k) % circle.length;
    circle.splice(temp_starting_position, 1);
    console.log(circle);
    return eliminate_element(circle, k, temp_starting_position - 1);
}

safe_spot(4, 2);
