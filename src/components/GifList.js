import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    const giffos = this.props.gifs || [];
    return (
      <div>
        <ul>
          {giffos.map(gif => {
            return (
              <li>
                <img src={gif.images.original.url} alt={gif.username} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
