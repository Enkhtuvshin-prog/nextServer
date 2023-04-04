import { Router } from "express";
import { getMovies } from "../controller/movies.controller";

const router = Router();

router.route("/").get(getMovies);

export default router;
