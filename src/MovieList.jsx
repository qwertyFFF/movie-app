import React from "react";

class MovieList extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div>
        <table key={this.props.movie.id}>
          <tbody>
            <tr>
              <td>
                <img
                  width="120"
                  src={this.props.movie.poster_src}
                  alt="poster"
                />
              </td>
              <td>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <input
                  type="button"
                  onClick={this.viewMovie.bind(this)}
                  value="view"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
