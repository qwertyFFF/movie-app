import React from "react";
import logo from "./primary-green.svg";
import "./App.css";
import MovieList from "./MovieList";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.blankState();

    // const movies = [
    //   {
    //     id: 0,
    //     poster_src: movieLogo,
    //     title: "Olá Mundo 1!!!",
    //     overview: "É isso ai..."
    //   },
    //   {
    //     id: 1,
    //     poster_src: movieLogo,
    //     title: "Olá Mundo 2!!!",
    //     overview: "É isso ai 2..."
    //   }
    // ];

    // this.state = {
    //   rows: <p>This my row!</p>
    // };

    // var movieRows = [];

    // movies.forEach(movie => {
    //   const movieRow = <MovieList movie={movie} />;

    //   movieRows.push(movieRow);
    // });

    // this.state = {
    //   rows: movieRows
    // };
    this.performSearch();
  }

  blankState() {
    this.state = {};
  }

  performSearch(searchMovie) {
    const urlSearch =
      "https://api.themoviedb.org/3/search/movie?api_key=c5850ed73901b8d268d0898a8a9d8bff&query=" +
      searchMovie;

    $.ajax({
      url: urlSearch,
      success: searchResults => {
        const results = searchResults.results;

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;

          const movies = <MovieList key={movie.id} movie={movie} />;

          movieRows.push(movies);
        });

        this.setState({
          rows: movieRows
        });
      },
      error: (xhr, status, err) => {
        alert("Oops! Algo deu errado, tente novamente!");
      }
    });
  }

  searchChangeHandler(event) {
    const eventSearch = event.target.value;
    this.performSearch(eventSearch);
  }

  render() {
    return (
      <div className="App">
        <table className="App-header">
          <tbody>
            <tr>
              <td>
                <img width="50" src={logo} alt="logo" />
              </td>
              <td>
                <h2>The MoviesDB App</h2>
              </td>
              <td>
                <input
                  className="App-input"
                  placeholder="Search movies.."
                  onChange={this.searchChangeHandler.bind(this)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
