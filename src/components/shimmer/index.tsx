import { Grid } from '@mui/material';
import CardShimmer from './CardShimmer';

const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

const ShimmerEffect = () => {
  return (
    <Grid
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {arr.map((index: any) => (
            <Grid key={index} sx={{margin: 1}}>
              <CardShimmer />
            </Grid>
          ))}
    </Grid>
  )
}

export default ShimmerEffect;

