const express = require("express");
const db = require("./data/db");
const app = express();
const port = process.env.PORT || 5000;
const BookDao = require("./data/BookDao");
app.use(express.json());

const books = new BookDao();
console.log("trying to connect to MondoDB");
db.connect();

app.get("/api/books", async (req, res) => {
    const { query } = req.query;
    const data = await books.readAll(query);
    res.json({ data });
  });

app.get("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const data = await books.read(id);
    res.json( { data: data ? data : [] });
})

app.post("/api/books", async (req, res) => {
    try {
        const { title } = req.body;
        const data = await books.create( { title });
        res.status(201).json({ data });
    } catch (err) {
        res.status(err.status).json( { message: err.message });
    }
});

app.get("/", (req, res) => {
  res.send("Book API!");
});

app.listen(port, () => {
  console.log(`Express app listening at port: http://localhost:${port}/`);
});
