const Book = require("../model/book");
const ApiError = require("../model/ApiError");

class BookDao {

    async create ({ title }) {
        if (title === undefined || title === "") {
            throw new ApiError(400, "Every book must have a title!");
        }
        const book = await Book.create({title});
        return book;
    }

    async read (id) {
        const book = await Book.findById(id);
        return book ? book : [];
    }

    async readAll (query = "") {
        if(query !== "") {
            const books = await Book.find().or([{ title: query }]);
            return books;
        }
        const books = await Book.find({});
        return books;
    }
}

module.exports = BookDao;