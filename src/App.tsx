import { Provider } from 'react-redux';
import { Container } from "@mui/material";

import store from './redux/store';
import Filters from "./components/filter"; // Importing Filters component
import JobCards from "./components/cards"; // Importing JobCards component

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" >
        <Filters /> {/* Render Filters component */}
        <JobCards /> {/* Render JobCards component */}
      </Container>
    </Provider>
  );
};

export default App;