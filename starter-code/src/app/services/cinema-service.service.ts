import { Injectable } from '@angular/core';


const moviesList = require('../../sample-movies');
export class Movie {
  constructor(public id:number, public title:string, public poster: string, public synopsis:string, public genres:Array<string>, public year:number, public director:string, public actors:Array<string>, hours: Array<string>, room:number) {}
}

@Injectable()
export class CinemaServiceService {
    movies: Array<Movie> = moviesList;

    constructor() { }

    getMovies() {
      return this.movies;
    }

    getMovie(id:number) {
      this.movies.forEach( movie => {
        if(movie.id === id) return movie;
      });
    }
}
