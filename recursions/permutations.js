// collections of things where the arrangement matters

const perm = (arr) => {
  //base case 
  if(arr.length === 0) return [[]];
  
  const firstEl = arr[0];
  const rest = arr.slice(1);
  const permWithoutFirst = perm(rest);
  const allPerms = [];
  permWithoutFirst.forEach(ar => {
    for(let i = 0; i <= ar.length; i++) {
      const permWithFirst = [...ar.slice(0, i), firstEl, ...ar.slice(i)];
      allPerms.push(permWithFirst);
    }
  })
  return allPerms;
}

//big O
// time:  O(n!) worst immaginable
// space: O(n^2)