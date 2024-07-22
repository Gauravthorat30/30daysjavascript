const book = {
    title : "Rich da poor dad",
    author : "Some random person",
    addedmethod : function(){
        return `${this.title} by ${this.author}`;
    },
    addedmethods : function(){
        return this.author + " by " + this.title;
    }
}

console.log(book.addedmethod());
console.log(book.addedmethods());