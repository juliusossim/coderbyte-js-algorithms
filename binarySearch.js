// fast way to search a sorted array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19];

const binarySearch = ({ arr, target }) => {
  let left = 0, right = arr.length - 1;
  let mid = Math.floor(left + right / 2);
  
  while(left < right){
    if(target === arr[mid]){
      return mid;
    } else{
      if(target > left) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

console.log(binarySearch({arr, target: 12}));