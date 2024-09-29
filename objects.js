const myLibrary = [
    {title: "Old Man", 
        author: "CS Lewis", 
        pages: 302, 
        read: true
    }, 
    {title: "Mountain", 
        author: "Bellamy", 
        pages: 500, 
        read: false
    }
];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    };

    console.log(this.info());
}

function addBookToLibrary() {
    myLibrary.push(userInput)
};

function displayBook() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    myLibrary.forEach(bookObj => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${bookObj.title}</h3>
            <p>Author: ${bookObj.author}</p>
            <p>Pages: ${bookObj.pages}</p>
            <p>Status ${bookObj.read ? 'Read' : 'Not Read'}</p>
        `;

        libraryContainer.appendChild(card);
    })
};