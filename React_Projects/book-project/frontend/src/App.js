import React from "react";
import { ChakraBaseProvider, List, ListItem } from "@chakra-ui/react";

class App extends React.Component {
  render() {
    return (
      <ChakraBaseProvider>
        <List>
          <ListItem> First Book </ListItem>
        </List>
      </ChakraBaseProvider>
    );
  }
}

export default App;
