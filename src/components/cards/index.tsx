import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJdList } from "../../redux/slices/dataSlice";
import { fetchSampleData } from "../../services/apiService";

function JobCards() {
  const dispatch = useDispatch();
  const jdData = useSelector((store: any) => store.jdData.jdList);
  // console.log(jdData[3]?.companyName)
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
    });
  },[])

  return (
    <>
    <Grid sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {jdData.map((item: any, index: any) => (
        <JobCard key={index} data={item} />
      ))}
    </Grid>
    </>
  );
}

export default JobCards;