import React from 'react';

class MainProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'ravikishorethella',
            name: '',
            picture: '',
            location: '',
            email: '',
            blog: '',
            repos: '',
            followers: '',
            following: ''
        }
    }



    render() {
        return (
            <div>
                Here goes the github content
            </div>
        )
    }

}

export default MainProfileCard;