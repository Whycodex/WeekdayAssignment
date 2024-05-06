import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList, setJdList } from "../../redux/slices/dataSlice";
import { fetchSampleData } from "../../services/apiService";
import { isValidJobData } from "../../utils/data";
import ShimmerEffect from "../shimmer";
import { RootState } from "../../redux/store";

// Component to display job cards
function JobCards() {
  const dispatch = useDispatch();
  const { jdList: jdData, filteredList } = useSelector(
    (store: RootState) => store.jdData
  );

  // Function to fetch data
  const fetchData = useCallback(() => {
    fetchSampleData(jdData.length).then((res) => {
      const validData = res.jdList.filter(isValidJobData);
      dispatch(setJdList([...jdData, ...validData]));
      dispatch(setFilteredList([...jdData, ...validData]));
    });
  }, [jdData.length, dispatch]);

  // Effect to fetch data on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchData();
      }
    };

    // Add a comment here
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  // Effect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {filteredList.length === 0 ? (
        <ShimmerEffect />
      ) : (
        <Grid
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {filteredList.map((item: any, index: any) => (
            <JobCard key={index} data={item} />
          ))}
        </Grid>
      )}
    </>
  );
}

export default JobCards;
