import React, { Component } from 'react'
import ResultCards from '../components/ResultCards/Index'
import Search from '../components/Search/Index'
import API from '../utils/API'
import TitleCard from '../components/TitleCard'

class Home extends Component {
    state = {
        bookSearch: "",
        books: []
    }

    componentDidMount() {
        this.getBooks("Hunger")
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    getBooks = query => {
        API.getGoogleBooks(query).then(res => this.setState({ books: res.data.items }))
    }

    saveBook = (save) => {
        console.log(save)
        API.saveBook(save)
            .then(saved => console.log(saved))
            .catch(err => console.log(err))
    }

    handleSave = event => {
        event.preventDefault()
        const chosenBook = this.state.books.filter(book => book.id === event.target.id)[0];
        const savedBook = {
            googleId: chosenBook.id,
            title: chosenBook.volumeInfo.title,
            author: chosenBook.volumeInfo.authors,
            image: chosenBook.volumeInfo.imageLinks.thumbnail,
            link: chosenBook.volumeInfo.infoLink,
            description: chosenBook.volumeInfo.description,
            date: Date.now()
        }
        this.saveBook(savedBook)
        alert("Book Saved")
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getBooks(this.state.bookSearch)
        this.setState({ bookSearch: "" })
    }

    render() {
        return (
            <>
                <Search
                    value={this.state.bookSearch}
                    name="bookSearch"
                    searchLabel="Type in the book you wish to find"
                    inputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.books.map(results =>
                    <ResultCards
                        key={results.id}
                        id={results.id}
                        title={results.volumeInfo.title}
                        image={results.volumeInfo.imageLinks.thumbnail && results.volumeInfo.imageLinks.thumbnail}
                        description={results.volumeInfo.description}
                        author={results.volumeInfo.authors && results.volumeInfo.authors.join(", ")}
                        link={results.volumeInfo.infoLink}
                        bookControl={this.handleSave}
                        buttonText="Save"
                    />)
                }
            </>
        )
    }
}
export default Home