import { OutlinedInput, styled } from '@mui/material'

const CustomOutlinedInput = styled(OutlinedInput)({
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
    fontSize: "12px"
  });
const SearchBox = ({placeholder}: {placeholder: string}) => {
    
  return <CustomOutlinedInput placeholder={placeholder} />;
};

export default SearchBox