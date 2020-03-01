import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRowComponent.js";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.extractRows();
  }

  extractRows() {
    console.log("Extracting movies list");
    const urlString =
      "https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20";
    $.ajax({
      url: urlString,
      success: filterResult => {
        // console.log("List import successful");
        // console.log(listResult);
        const results = filterResult.data;
        // console.log(results[0]);
        var movieRows = [];
        results.forEach(movie => {
          // console.log(movie.POSTER);
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("failed to imprt data");
      }
    });
  }

  render() {
    return (
      <div className="App">
        <table className="Title">
          <tbody>
            <tr>
              <td>
                <img alt="icon" width="50" src="images.jpg" />
              </td>
              <td width="7" />
              <td>
                <h1>Movie List Exercise</h1>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.rows};
      </div>
    );
  }
}
export default App;
