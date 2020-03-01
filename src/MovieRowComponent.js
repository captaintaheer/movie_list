import React from "react";

class MovieRow extends React.Component {
  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td> {this.props.movie.row_name}</td>

            <td>
              <img alt="icon" width="50" src="images.jpg" />
              <p>{this.props.movie.title}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
