const myLibrary = [];


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

// Toggle method on the Book prototype
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

// display book cards

function displayBook() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((bookObj, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${bookObj.title}</h3>
            <p>Author: ${bookObj.author}</p>
            <p>Pages: ${bookObj.pages}</p>
            <p>Status: ${bookObj.read ? 'Read' : 'Not Read'}</p>
            <button class='toggle-btn' data-index='${index}'>Toggle Read Status</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        libraryContainer.appendChild(card);
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteBook);
    });

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', toggleReadStatus)
    });
};

// delete book from library array 

function deleteBook(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1);
    displayBook()
};

// toggle read status function

function toggleReadStatus(event) {
    const bookIndex = event.target.getAttribute('data-index'); //get array position
    const book = myLibrary[bookIndex]; //find the book in the array
    book.toggleReadStatus();
    displayBook();
}


// add new book object to the library array

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBook();
};

//modal functionality

const modal = document.getElementById('bookModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementsByClassName('close')[0];
const form = document.getElementById('bookForm');

// open modal when button is clicked

openModal.onclick = function() {
    modal.style.display = 'flex';
};

// close modal when 'X' is clicked

closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close the modal when clicking outside of the modal content

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission

form.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Create a new book object

    const newBook = new Book(title, author, pages, read);

    // Add the new book to the library

    addBookToLibrary(newBook);

    // Clear form fields and close the modal
    form.reset();
    modal.style.display = 'none';

})


displayBook();