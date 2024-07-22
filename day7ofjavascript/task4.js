let obj = {
    title : "Rich dad poor dad",
    author : "Some random person",
    year : 1999,
    edityear : function(newyear){
        return this.year = newyear;
        // console.log(this.year);
    }
}

console.log(obj.edityear(2000));