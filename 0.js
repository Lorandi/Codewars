const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
            
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalCategories = booksByCategory.length;
console.log(` O total de categorias é ${totalCategories}`);

for (let categoria of booksByCategory){
    console.log(`Total de livros da categoria ${categoria.category} é ${categoria.books.length}`)
}

function countAuthors(){
    let authors = [];

    for(let categoria of booksByCategory){
        for(let book of categoria.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)               
            }
        }
    }
    console.log(`Os autores são ${authors.length}: ${authors.join(", ")}`);    
}

function booksOfAuthor(author){
    let books = [];

    for(let categoria of booksByCategory){
        for(let book of categoria.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Foram encontrado(s) ${books.length} livro(s) de ${author}: ${books.join(", ")}`);    
}

countAuthors();

booksOfAuthor("Augusto Cury");