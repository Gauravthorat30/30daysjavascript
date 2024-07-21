let arr = [10 , 20 , 30 , 40 , 50];
console.log(arr);
let newarr = arr.reduce(function (addedval , firstval){
    return addedval + firstval;
} , 0)
console.log(newarr);
console.log(typeof(newarr));
