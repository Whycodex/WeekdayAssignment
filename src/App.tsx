import { Provider } from 'react-redux';
import store from './redux/store';
import { Container } from "@mui/material";
import Filters from "./components/filter";
import JobCards from "./components/cards";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Filters />
        <JobCards />
      </Container>
    </Provider>
  );
};

export default App;