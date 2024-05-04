import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList, setJdList } from "../../redux/slices/dataSlice";
import { fetchSampleData } from "../../services/apiService";

function JobCards() {
  const dispatch = useDispatch();
  const { jdList: jdData, filteredList } = useSelector(
    (store: any) => store.jdData
  );

  const isValidJobData = (data: any) => {
    return (
      data.jdUid &&
      data.logoUrl &&
      data.companyName &&
      data.jobRole &&
      data.location &&
      typeof data.minExp === "number" &&
      typeof data.minJdSalary === "number" &&
      typeof data.maxJdSalary === "number" &&
      data.jobDetailsFromCompany
    );
  };

  const fetchData = useCallback(() => {
    fetchSampleData(jdData.length).then((res) => {
      const validData = res.jdList.filter(isValidJobData);
      dispatch(setJdList([...jdData, ...validData]));
      dispatch(setFilteredList([...jdData, ...validData]));
    });
  }, [jdData.length, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchData();
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredList.map((item: any, index: any) => (
          <JobCard key={index} data={item} />
        ))}
      </Grid>
    </>
  );
}

export default JobCards;
