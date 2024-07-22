let library = {
    name : "my library",
    books : [
        {
            title : "title1",
            author : "author1",
            year : 2001
        },
        {
            title : "title2",
            author : "author2",
            year : 2002
        },
        {
            title : "title3",
            autor : "author3",
            year : 2003
        }
    ]
}

console.log(library.name);
for(let i = 0 ; i < library.books.length ; i++){
    console.log(library.books[i].title)
}