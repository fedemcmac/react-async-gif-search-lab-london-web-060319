import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifs: []
  };

  // componentDidMount() {
  //     fetch()
  // }

  handleSearch = event => {
    event.preventDefault();
    const searchTerm = event.target.searchTerm.value;
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          gifs: data
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs.data} />
      </div>
    );
  }
}
