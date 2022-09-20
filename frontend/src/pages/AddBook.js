import React, { Component } from "react";
import {FormControl, Button, TextField,} from '@mui/material';

class AddBooks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }
    }

    updateTitle = (event) => {
        this.setState( {
            title: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBook(this.state);
    }

    render() {
        return (
            <form>
                <FormControl fullWidth>
                    <TextField label="Title" 
                    variant="outlined"
                    value = {this.state.text}
                    onChange={this.updateTitle}
                    />
                </FormControl>
                <div>
                    <Button type='button' color='primary' onClick={this.handleSubmit}>
                        Add
                    </Button>
                </div>
            </form>
        )
    }
}

export default AddBooks;