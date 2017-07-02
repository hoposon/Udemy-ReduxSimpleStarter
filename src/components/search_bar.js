import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term:'' };
    }

    render() { // react.createElement
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    //onChange={event => this.setState({ term: event.target.value })} />
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }



    /////////////////////////////////////////////////////////////////////////

    // constructor(props) {
    //     super(props);

    //     this.state = { term:'' };
    // }

    // render() { // react.createElement
    //     return (
    //         <div>
    //             <input onChange={event => this.setState({ term: event.target.value })} />
    //             Value of the input: {this.state.term}
    //         </div>
    //     )
    // }

    /////////////////////////////////////////////////////////////////////////

    // render() { // react.createElement
    //     return <input onChange={event => console.log(event.target.value)} />;
    //     // the same as return <input onChange={this.onInputChange} />;
    // }
    
    // onInputChange(event) {
    //      console.log(event.target.value)   
    // }
}

export default SearchBar;