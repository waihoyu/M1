let  arr = [1,2,3,4,5,6];

let result = arr.splice(1,1);

// console.log(result);
// console.log(arr);

function sum(total, currentValue, currentIndex, arr){
    console.log(total, currentValue, currentIndex, arr);
    return total + currentValue;
}
let total = 0;
total=arr.reduce(sum,[]);
console.log(total);
