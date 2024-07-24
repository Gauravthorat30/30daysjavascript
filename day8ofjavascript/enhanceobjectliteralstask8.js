let myname = "gaurav";
let age = 18;
let object = {
    myname,
    age,
    details(){
        console.log(`hello my name is ${this.myname} and my age is ${this.age}`)
    },

    ['isAdult'](){
        return this.age >= 18;
    }
}

console.log(object);
object.details();
console.log(`is adult ${object.isAdult()}`)
