// recursive or repetitve call to a function

//recursive array sum solution

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19];
const sum = (arr) => {
  if (arr.length === 0) return 0
  const rest = arr.slice(1);
  return arr[0] + sum(rest);
}

console.log(sum(arr));
