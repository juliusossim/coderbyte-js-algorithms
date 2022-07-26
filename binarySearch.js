// fast way to search a sorted array

//iterative method

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19];

const binarySearch = ({ arr, target }) => {
  let left = 0, right = arr.length - 1;
  let mid = Math.floor(left + right / 2);

  while(left < right){
    if(target === arr[mid]){
      return mid;
    } else{
      if(target > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
// BigO
// time: O(logn)
// space: O()
// best



//recursive method
const binarySearchRecursive = ({ arr, target, left, right }) => {
  if(left > right)   return false;

  const mid = Math.floor(left + right / 2);
  if (target === arr[mid]){
    return mid;
  }
  else {
    if(target > arr[mid]) {
      return binarySearchRecursive({arr, target, left: mid + 1, right});
    }
  else {
    return binarySearchRecursive({arr, target, left: left, right: mid - 1});
  }
  }
};
// BigO
// time: O(logn)
// space: O(n)

// console.log(binarySearchRecursive({arr, target: 10, left: 0, right: arr.length - 1}));
console.log(binarySearch({arr, target: 12}));

