import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["option 1", "option 2", "option 3", "option 4"]
    };
  }
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  };
  render() {
    const title = "To-Do App";
    const subtitle = "change is good";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

// Header component
class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

// Action component

class Action extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          Do something
        </button>
      </div>
    );
  }
}

// Options component
class Options extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

// Option component
class Option extends Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

// Add Option component
class AddOption extends Component {
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert("value returned");
    }
  };
  render() {
    return (
      <div>
        <p>This is an add option component</p>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default App;
