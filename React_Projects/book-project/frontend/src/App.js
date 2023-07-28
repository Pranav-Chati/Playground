import React from "react";
import axios from "axios";

import {
  ChakraBaseProvider,
  FormControl,
  FormLabel,
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
      author: "",
      title: "",
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

  handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/books/", {
        author: this.state.author,
        title: this.state.title,
      })
      .then((res) => this.refreshlist())
      .catch((error) => console.log(error));

    // Clear the state ...
    this.setState({
      author: "",
      title: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderBookShelf = () => {
    return this.state.bookshelf.map((book) => (
      <ListItem key={book.id}> {book.title} </ListItem>
    ));
  };

  render() {
    return (
      <ChakraBaseProvider>
        <FormControl>
          <HStack>
            <Input
              id="titleInput"
              name="title"
              placeholder="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Input
              id="authorInpuet"
              name="author"
              placeholder="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
            />

            <IconButton
              variant="outline"
              aria-label="Search database"
              icon={<SearchIcon />}
              type="submit"
              onClick={this.handleSubmit}
            />
          </HStack>
        </FormControl>

        <UnorderedList>{this.renderBookShelf()}</UnorderedList>
      </ChakraBaseProvider>
    );
  }
}

export default App;
