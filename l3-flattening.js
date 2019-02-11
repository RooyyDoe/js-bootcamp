// Your code here.
// → [1, 2, 3, 4, 5, 6]


let arrays = [[1, 2, 3], [4, 5], [6]];

var arraysGlue = arrays.reduce((total, amount) => total.concat(amount));

//[0].concat(arrays[1], arrays[2]);

console.log(arraysGlue);

