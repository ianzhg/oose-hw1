import {List} from '@mui/material';
import Book from "../components/Book";

function DisplayBooks(props) {
    const { books } = props;
    console.log("display books");
    console.log(books);
    return (
        <>
            <List>
            {books.map((book, index) => {
                return <Book book={book} key={index}/>
            })}
            </List>

        </>
    );

}

export default DisplayBooks