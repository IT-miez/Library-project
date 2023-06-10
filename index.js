

let addToShelf = document.getElementById("bookshelf")

let book3 = {
    name: "Plato: The Republic",
    author: "Plato",
    pages: 368,
}

let book2 = {
    name: "Discourses and selected writings",
    author: "Diogenys",
    pages: 270,
}

let book1 = {
    name: "The Bible",
    author: "random people",
    pages: 800,
}

let myLibrary = [book1, book2, book3, book1, ]

function Book () {

}



function addBookToLibrary(bookObject) {
    console.log("Adding book to library")


    let newH4 = document.createElement("h4")
    newH4.classList.add("book-text")
    let newP1 = document.createElement("p")
    newP1.classList.add("book-subtext")
    let newP2 = document.createElement("p")
    newP2.classList.add("book-subtext")

    newH4.textContent = bookObject.name
    newP1.textContent = bookObject.author
    newP2.textContent = bookObject.pages

    let bookDiv = document.createElement("div")
    bookDiv.classList.add("book")
    bookDiv.setAttribute("data-index", 100)
    bookDiv.appendChild(newH4)
    bookDiv.appendChild(newP1)
    bookDiv.appendChild(newP2)
    addToShelf.appendChild(bookDiv)
    console.log("Added book to library.")
}

// ADD BOOKS

for (i in myLibrary) {
    let currentBook = myLibrary[i]
    console.log(currentBook.name)
    console.log(currentBook.author)
    console.log(currentBook.pages)

    let newH4 = document.createElement("h4")
    newH4.classList.add("book-text")
    let newP1 = document.createElement("p")
    newP1.classList.add("book-subtext")
    let newP2 = document.createElement("p")
    newP2.classList.add("book-subtext")

    newH4.textContent = currentBook.name
    newP1.textContent = currentBook.author
    newP2.textContent = currentBook.pages

    let bookDiv = document.createElement("div")
    bookDiv.classList.add("book")
    bookDiv.setAttribute("data-index", i)
    bookDiv.appendChild(newH4)
    bookDiv.appendChild(newP1)
    bookDiv.appendChild(newP2)


    addToShelf.appendChild(bookDiv)
}


document.getElementById("openModal").addEventListener("click", () => {
    console.log("Open modal")
    let modal = document.getElementById("modal")
    modal.style.display= "flex" 
})

window.onclick = () => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

document.getElementById("submitBtn").addEventListener("click", () => {
    console.log("Submitting book data")
    const form = document.getElementById("myForm")
    let formData = new FormData(form)
    let bookObject = {
        name: formData.get("bookname"),
        author: formData.get("author"),
        pages: formData.get("pages"),
    }

    myLibrary.push(bookObject)

    addBookToLibrary(bookObject)



    console.log(formData.get("author"))
})