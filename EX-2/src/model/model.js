import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
const Author = sequelize.define("Author", {
    nmae: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
});
const Book = sequelize.define("Book", {
    title: DataTypes.INTERGER,
    publicationYear: DataTypes.INTEGER,
    pages: DataTypes.INTEGER
});

Author.hasMany(Book);
Book.belongsTo(Author);

export {Author, Book}