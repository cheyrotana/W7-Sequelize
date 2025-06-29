import { getBooksByAuthor, createBookForAuthor, getAllAuthorsWithBooks } from "../controller/controller.js";
import express from 'express';

const router = express.Router();

router.get("/authors/:authorId/books", getBooksByAuthor);
router.post("/authors/:authorId/books", createBookForAuthor);
router.get("/authors", getAllAuthorsWithBooks);

export default router;