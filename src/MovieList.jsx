import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MovieList extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div>
        <Paper className={useStyles.root}>
          <Table className={useStyles.table} key={this.props.movie.id}>
            <TableBody>
              <TableRow >
                <TableCell align="left">
                  <img
                    width="120"
                    src={this.props.movie.poster_src}
                    alt="poster"
                    className="Movie-logo"
                  />
                </TableCell>
                <TableCell align="left">
                  <h3>{this.props.movie.title}</h3>
                  <p>{this.props.movie.overview}</p>
                  <Button
                    type="button"
                    onClick={this.viewMovie.bind(this)}
                    variant="contained"
                    color="primary"
                    className={useStyles.button}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default MovieList;
