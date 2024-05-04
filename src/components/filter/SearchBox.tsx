import { OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList } from "../../redux/slices/dataSlice";

const SearchBox = ({ placeholder }: { placeholder: string }) => {
  const dispatch = useDispatch();
  const { jdList } = useSelector((state: any) => state.jdData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(
      setFilteredList(
        jdList.filter((job: { companyName: string }) =>
          job.companyName.toLowerCase().includes(searchQuery)
        )
      )
    );
  }, [searchQuery]);

  return (
    <OutlinedInput
      sx={{
        "& .MuiOutlinedInput-input": {
          padding: "10px 14px",
        },
        fontSize: "12px",
        minWidth: "180px"
      }}
      placeholder={placeholder}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBox;
