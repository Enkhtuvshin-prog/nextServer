import { Request, Response } from "express";

import Movie from "../Model/Movie";

const getMovies = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const total = await Movie.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  try {
    const movies = await Movie.find().skip(skip).limit(limit);
    res
      .status(200)
      .json({ success: true, movies, pagination: { pageCount, total, page } });
  } catch (err) {
    console.log("ERR++", err);
  }
};

const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.status(200).json({ success: true, movie });
};

export { getMovies, getMovie };
