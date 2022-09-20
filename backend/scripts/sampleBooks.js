
const faker = require("faker");
const db = require("../data/db");
const BookDao = require("../data/BookDao");

async function createSampleBooks() {
    try {
        await db.connect();

        const books = new BookDao();
        const book = await books.create({
            title: faker.lorem.sentence(),
        });
        console.log(book);
    } catch(err) {
        console.log(err);
    }
}

createSampleBooks();