import {Container} from "@mui/material";

import Filters from "./components/filter";
import JobCard from "./components/cards";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Filters />
      <JobCard />
    </Container>
  );
};

export default App;
