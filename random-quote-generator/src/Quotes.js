import React, { Fragment } from "react";
import { Button, Icon } from "antd";
import "antd/dist/antd.css";

class Quotes extends React.Component {
  state = {
    quote: "",
    author: ""
  };

  componentDidMount() {
    this.loadNewTweet();
  }

  loadNewTweet = () => {
    const url = `https://talaikis.com/api/quotes/random/`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          quote: data.quote,
          author: data.author
        })
      );
  };

  render() {
    const tweet = `https://twitter.com/intent/tweet?text=${
      this.state.quote
    } - ${this.state.author}`;
    return (
      <Fragment>
        <div className="app">
          <div className="quote">
            <p>{this.state.quote} </p>
          </div>
          <div className="author">
            <p> - {this.state.author} </p>
          </div>
        </div>
        <div className="btns">
          <Button className="btn" type="danger" onClick={this.loadNewTweet}>
            {" "}
            New Quote <Icon type="reload" />
          </Button>
          <Button className="btn" type="primary">
            <a href={tweet} target="_blank">
              Tweet <Icon type="twitter" />
            </a>
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Quotes;
