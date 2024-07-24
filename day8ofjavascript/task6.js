let arr1 = [1 , 2 , 3];
const arr2 = (a , b , c) => a + b + c;  
console.log(arr2(...arr1));

let array1 = [1 , 2 , 3 , 4 , 5];
function sum(...a){
    return a.reduce((added , first) => added + first , 0)
}

console.log(sum(1 , 2 , 3 , 4));