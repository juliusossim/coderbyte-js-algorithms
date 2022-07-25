// recursive or repetitve call to a function

//recursive array sum solution

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19];
const sum = (arr) => {
  if (arr.length === 0) return 0
  const rest = arr.slice(1);
  return arr[0] + sum(rest);
}

//Big O
// n sum calls and n arr.slice calls
// n call stacks

// Time: O(n2) (quadratic)
// Space: O(n)


// optimised solution:

const sum2 = (arr) => {
  return _sum(arr, 0);
}
const _sum = (arr, index) => {
  if(index === arr.length) return 0;
  return arr[index] + _sum(arr, index + 1)
}

//Big O
// Time: O(n)
//Space: O(n)


//Multi-Branch Recursive solutions

// fibonacci series

const fib = (n) => {
  if(n === 1 || n === 2) return 1;
  return fib(n-1) + fib(n-2);
}

//Big O 
// Time: O(2^n) (Exponential)
// Space: O(n)

console.log(sum(arr));
