import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    console.log("this saves the data");
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid info";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };
  render() {
    const subtitle = "change is good";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// Header component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: "To-Do App"
};

// Action component

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        Do something
      </button>
    </div>
  );
};

// Options component
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to get started</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// Option component
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

// Add Option component
class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // if (option) {
    //   this.props.handleAddOption(option);
    // }
    this.setState(() => ({
      error: error
    }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
