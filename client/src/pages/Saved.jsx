import React, { Component } from 'react'
import ResultCards from '../components/ResultCards/Index'
import Search from '../components/Search/Index';
import API from '../utils/API'

class Saved extends Component {
    state = {
        savedBookSearch: "",
        savedBooks: []
    }

    componentDidMount() {
        this.getSavedBooks()
    }

    getSavedBooks() {
        API.getSavedBooks()
            .then(books => this.setState({ savedBooks: books.data }))
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.savedBookSearch)
        this.setState({ savedBookSearch: "" })
    }

    removeBook = event => {
        event.preventDefault()
        const chosenBook = this.state.savedBooks.filter(book => book.googleId === event.target.id)[0];
        console.log(chosenBook)
        API.deleteBook(chosenBook._id).then(deleted => this.getSavedBooks())
    }

    render() {
        return (
            <>
                {this.state.savedBooks.map(results =>
                    <ResultCards
                        key={results._id}
                        id={results.googleId}
                        title={results.title}
                        image={results.image}
                        description={results.description}
                        author={results.author.join(", ")}
                        link={results.infoLink}
                        bookControl={this.removeBook}
                        buttonText="Remove"
                    />)}
            </>
        );
    }
}
export default Saved