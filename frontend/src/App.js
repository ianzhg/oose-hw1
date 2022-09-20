import { React } from "react";
import { Component } from "react";
import { Container,  Typography} from '@mui/material';
import DisplayBooks from "./pages/DisplayBooks";
import AddBooks from "./pages/AddBook";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    fetch("/api/books")
      .then(res => res.json())
      .then(books_list => {
        this.setState({ books: books_list.data});
      })

  }


  addBook = (book) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title: book.title })
    }
    fetch("/api/books", request)
      .then(res => window.location.reload = window.location.reload(true))
    
  }

  render() {
    const {books} = this.state;
    return (
      <Container>
        <Typography variant='h2' component='h1' >
          Favorite Books:
        </Typography>
        <DisplayBooks books = {books} />
        <AddBooks addBook={this.addBook}/>
      </Container>
    );
  }
}

export default App;
