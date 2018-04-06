import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchName: ''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange = (event) => {
        this.setState({
            searchName: event.target.value
        });
    }

    render() {
        return (
            <div>
                Testing only....
            </div>
        )

    }

}

export default Search;