import { Router } from "express";
import { getMovie, getMovies } from "../controller/movies.controller";

const router = Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie)

export default router;
