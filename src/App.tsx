import { Provider } from 'react-redux';
import store from './redux/store';
import { Button, Container } from "@mui/material";
import Filters from "./components/filter";
import JobCards from "./components/cards";
import { fetchSampleData } from './services/apiService';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Filters />
        <JobCards />
      </Container>
    </Provider>
  );
};

export default App;