import { ListItem, ListItemText } from '@mui/material';

function Book(props) {
  const { book } = props;

  return (
    <ListItem>
      <ListItemText primary={book.title} />
    </ListItem>
  );
}

export default Book;