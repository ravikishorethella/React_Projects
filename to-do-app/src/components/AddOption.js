import React, { Component } from "react";

// Add Option component
class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    console.log("testing");
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
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
