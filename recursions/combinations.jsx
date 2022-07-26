const combinations = (arr) => {
  //base case
  if(arr.length === 0) return [[]];

  const firstEl = arr[0];
  const rest = arr.slice(1);
  const combsWithoutFirstEls = combinations(rest);
  const combsWithFirstEls = [];

  //combinations with first element
   combsWithoutFirstEls.forEach(comb => {
     const combWithFirst = ([...comb, firstEl])
     combsWithFirstEls.push(combWithFirst);
    });

  return [...combsWithFirstEls, ...combsWithoutFirstEls];

}
console.log(combinations(['a', 'b', 'c']));