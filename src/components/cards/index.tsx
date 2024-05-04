import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList, setJdList } from "../../redux/slices/dataSlice";
import { fetchSampleData } from "../../services/apiService";

function JobCards() {
  const dispatch = useDispatch();
  const {jdList: jdData, filteredList} = useSelector((store: any) => store.jdData);
  
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        fetchSampleData(jdData.length)
          .then((res) => {
            dispatch(setJdList([...jdData, ...res.jdList]));
          });
      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jdData]);

  useEffect(()=>{
    fetchSampleData(jdData.length)
    .then((res) => {
      dispatch(setJdList([...jdData, ...res.jdList]));
      dispatch(setFilteredList([...jdData, ...res.jdList]));
    });
  },[])

  return (
    <>
    <Grid sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filteredList.map((item: any, index: any) => (
        <JobCard key={index} data={item} />
      ))}
    </Grid>
    </>
  );
}

export default JobCards;