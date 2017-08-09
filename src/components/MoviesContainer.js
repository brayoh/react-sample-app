import React, { Component } from 'react';
import MovieCard from "./MovieCard";
import axios from "axios";


class MoviesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          "movies": []
        }
    }

    componentWillMount(){
      // get the movies from our api
      const url = "https://kenyamax2.herokuapp.com/movies/popular";
      const _this = this;

      fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        // Create and append the li's to the ul
          _this.setState({
              "movies": data.Movies
          })
      }).catch((err) =>{
          console.error(err)
      })
    }
    render(){
      return(
        <div>
            <p>This is are the movies</p>
            <MovieCard movies={this.state.movies}/>
        </div>
      )
    }
}

export default MoviesContainer;
