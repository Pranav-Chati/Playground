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
      bookList: [],
    };
  }

  componentDidMount() {
    this.refreshlist();
  }

  refreshlist() {
    axios
      .get("http://localhost:8000/api/books/")
      .then((res) => this.setState({ bookList: res.data }))
      .catch((err) => console.log(err));
  }

  renderBookList = () => {
    return this.state.bookList.map((book) => (
      <ListItem key={book.id}> {book.title} </ListItem>
    ));
  };

  // When Search Icon is Clicked, add the title to the list

  render() {
    return (
      <ChakraBaseProvider>
        <FormControl>
          <HStack>
            <Input id="bookName" placeholder="book title" />
            <Input id="authorName" placeholder="author" />
            <IconButton
              variant="outline"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={this.handleSubmit}
            />
          </HStack>
        </FormControl>

        <UnorderedList>{this.renderBookList()}</UnorderedList>
      </ChakraBaseProvider>
    );
  }
}

export default App;
