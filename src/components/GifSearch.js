import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            this.props.handleSearch(event);
          }}
        >
          <label>Enter a Search Term:</label><br />
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          /><br />
          <button type="button" class="btn btn-success">Find Gifs</button>
        </form>
      </div>
    );
  }
}
