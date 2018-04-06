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

        let pgmgLang = this.props.list;
        let searchName = this.state.searchName.trim().toLowerCase();

        if (searchName.length > 0) {
            pgmgLang = pgmgLang.filter((i) => {
                return i.item.name.toLowerCase().match(searchName);
            })
        }

        return (
            <div>
                <input type="text" value={this.state.searchName} onChange={this.onChange} placeholder="Search here..." />
                <ul>
                    {
                        pgmgLang.map((elem, i) => {
                            return <li key={i}>{elem.item.name} <a href={elem.item["@id"]}>{elem.item["@id"]}</a></li>
                        })
                    }
                </ul>
            </div>
        )

    }

}

export default Search;