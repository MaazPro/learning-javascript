class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    
}

const book1 = new Book("Book One", "John Doe", "2013")
console.log(book1);
