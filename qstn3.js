// 3. add generation property to the book and update the price property in book

let book={
    name:"abcd",
    year:"2000",
    price:100
}


book["generation"]="1st"

book.price+=50;

console.log(book);