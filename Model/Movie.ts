import { Schema, model } from "mongoose";

interface IMovie {
  plot: String;
  genres: String[];
  runtime: Number;
  cast: String[];
  title: String;
  poster: String;
  fullplot: String;
  languages: String[];
  released: Date;
  directors: String[];
  writers: String[];
  awards: {
    wins: String;
    nominations: String;
    text: String;
  };
  lastupdate: Date;
  year: Number;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  countries: String[];
  type: String;
  tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
      meter: Number;
    };
    production: String;
    lastUpdate: Date;
  };
  num_mflix_comments: Number;
}
const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
