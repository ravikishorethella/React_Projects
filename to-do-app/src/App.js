import React, { Component } from "react";
import "./App.css";

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
  handlePick = () => {
    alert("pick something");
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Do something</button>
      </div>
    );
  }
}

// Options component
class Options extends Component {
  handleRemoveAll = () => {
    console.log(this.props.options);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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

class App extends Component {
  render() {
    const title = "To-Do App";
    const subtitle = "change is good";
    const options = ["option 1", "option 2", "option 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
