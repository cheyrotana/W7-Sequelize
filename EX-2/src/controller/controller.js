import { Author, Book } from "../model/model.js";

export async function getBooksByAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    const books = await author.getBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createBookForAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    const book = await author.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllAuthorsWithBooks(req, res) {
  try {
    const authors = await Author.findAll({ include: Book });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}