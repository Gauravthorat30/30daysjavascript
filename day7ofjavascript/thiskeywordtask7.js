let books = {
    title : "Rich dad poor dad",
    author : "Some random person",
    year : 1999,
    method : function(){

        console.log(this.title + " by " + this.year);
        return `${this.title} by ${this.year}`
    }
}
console.log(books.method());