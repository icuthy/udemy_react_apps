import React from 'react';

class SearchBar extends React.Component {

    state = { term: 'jhk' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchBarSubmit(this.state.term);
    }

    render() {
        return (

            < div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} />
                    </div>
                </form>

            </div >
        )
    }
}

export default SearchBar;