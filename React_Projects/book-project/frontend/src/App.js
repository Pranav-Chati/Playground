import React, { useState } from "react";
import axios from "axios";
import {
  ChakraBaseProvider,
  FormControl,
  HStack,
  IconButton,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: [],
    };
  }

  componentDidMount() {
    this.refreshlist();
  }

  refreshlist = () => {
    axios
      .get("http://localhost:8000/api/books/")
      .then((result) => this.setState({ bookshelf: result.data }))
      .catch((error) => console.log(error));
  };

  handleSubmit = (e) => {

    axios
      .post("http://localhost:8000/api/books/", {
        author: e.target.authorName.value,
        title: e.target.bookName.value,
      })
      .then((res) => this.refreshList())

    //this gets the bookName by using the name value
    console.log(e.target.bookName.value);
  };

  renderBookShelf = () => {
    return this.state.bookshelf.map((book) => (
      <ListItem key={book.id}> {book.title} </ListItem>
    ));
  };

  render() {
    return (
      <ChakraBaseProvider>
        <form onSubmit={this.handleSubmit}>
          <input name="bookName" placeholder="book title" />
          <input name="authorName" placeholder="author" />
          <button type="submit">Submit</button>
        </form>

        {/* there is a difference between onClick and onSubmit in terms of events */}
        {/* <FormControl>
          <HStack>
            <Input name="bookName" placeholder="book title" />
            <Input name="authorName" placeholder="author" />
            <IconButton
              variant="outline"
              aria-label="Search database"
              icon={<SearchIcon />}
              onSubmit={this.handleSubmit}
            />
          </HStack>
        </FormControl> */}

        <UnorderedList>{this.renderBookShelf()}</UnorderedList>
      </ChakraBaseProvider>
    );
  }
}

export default App;
