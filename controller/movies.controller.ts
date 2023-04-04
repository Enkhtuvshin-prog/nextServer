import { Request, Response } from "express";

import Movie from "../Model/Movie";

const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find().limit(5);
    res.status(200).json({ success: true, movies });
  } catch (err) {
    console.log("ERR++", err);
  }
};

export { getMovies };
