const combinations = (arr) => {
  //base case
  if(arr.length === 0) return [[]];

  const firstEl = arr[0];
  const rest = arr.slice(1);
  const combsWithoutFirstEls = combinations(rest);
  const allCombs = [];

  //combinations with first element
  const combsWithFirstEls = combsWithoutFirstEls.forEach(comb => ([...comb, firstEl]));

  return [...combsWithFirstEls, ...combsWithoutFirstEls];

}
console.log(combinations(['a', 'b', 'c']));