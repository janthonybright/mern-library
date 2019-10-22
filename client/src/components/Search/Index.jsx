import React from 'react'

const Search = (props) => {
    return (
        <div className="container">
        <div className="row">
            <div className="input-field col s12">
                <input value={props.bookSearch} id="bookSearch" name={props.name} type="text" className="validate" onChange={props.inputChange} />
                <label className="active" htmlFor="bookSearch">{props.searchLabel}</label>
                <button className="btn waves-effect waves-light blue" type="submit" name="action" onClick={props.handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
    )
}

export default Search;