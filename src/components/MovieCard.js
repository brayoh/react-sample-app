import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const MovieCard = (props) => (
  <div className='movie-card-container'>
    {
      props.movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <Card>
              <CardMedia
                overlay={<CardTitle title="Total Votes" subtitle={movie.popularity} />}
              >
                <img src={movie.poster} alt="" />
              </CardMedia>
              <CardTitle title={movie.title} subtitle={movie.rating} />
              <CardText>
                  {movie.synopsis}
              </CardText>
              <CardActions>
                  <FlatButton label="View Trailer" />
                  <FlatButton label="Buy Ticket" />
              </CardActions>
          </Card>
        </div>
      ))
    }
  </div>
);

export default MovieCard;
