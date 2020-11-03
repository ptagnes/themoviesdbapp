import React, { Component } from "react";
import MoviesList from "./Movies/MoviesList/MoviesList";

export default class Demo extends Component {
  render() {
    return (
      <div style={{ padding: "7rem 2rem" }}>
        <MoviesList />
      </div>
    );
  }
}
