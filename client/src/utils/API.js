import axios from "axios";

export default {
  // Gets all books
  getGoogleBooks: string => {
    let query = string.split(" ").join("+");
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyBayoq109StPb0StMJ_NW4ojoA0yAOQ9r0")
  },
  getSavedBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: id => {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: id => {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  }
};