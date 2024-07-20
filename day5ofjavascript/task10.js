function main(fn1 , fn2 , value){
    return fn2(fn1(value));

}

const double = (x) => 
    x * 2;

const square = (x) => 
    x * x

console.log(main(double , square , 2));