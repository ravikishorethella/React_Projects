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
  render() {
    return (
      <div>
        <button>Do something</button>
      </div>
    );
  }
}

// Options component
class Options extends Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        <p>This is an add option component</p>
        <form>
          <input type="text" />
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
