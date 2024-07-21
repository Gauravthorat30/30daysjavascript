let arr = [10 , 20 , 30 , 50];
console.log(arr);
let newarr = arr.filter(function(value){
    return value > 20;
})
console.log(newarr);
console.log(typeof(newarr))