import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table class="idk" key={this.props.movie.id}>
        <tbody>
          <td>
            <img
              class="poster"
              alt="poster"
              width="270"
              src={this.props.movie.poster_src}
            />
          </td>
          <td>
            <h3 class="title">{this.props.movie.title}</h3>
            <p class="overview">{this.props.movie.overview}</p>
            <input
              class="myButton"
              type="button"
              onClick={this.viewMovie.bind(this)}
              value="View Movie"
            />
          </td>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
