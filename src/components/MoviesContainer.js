import React, { Component } from 'react';
import MovieCard from "./MovieCard";
import axios from "axios";


class MoviesContainer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      // get the movies from our api
      const url = "https://kenyamax2.herokuapp.com/movies/popular";
      axios.get(url)
      .then(function (response) {
          console.log("response", response);
      })
      .catch(function (error) {
          console.log("error",error);
      });
    }
    render(){
      return(
        <div>
            <p>This is a test</p>
        </div>
      )
    }
}

export default MoviesContainer;
