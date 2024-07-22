let object = {
    title : "Rich dad poor dad",
    author : "Some random person",
    year : 1999,
    method : function() {
         return `${this.title}`
    }
}

for(let property in object){
    console.log(`${property}: ${object[property]}`);
}
console.log(object.method())

