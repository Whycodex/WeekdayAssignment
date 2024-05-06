import { Grid } from '@mui/material';
import CardShimmer from './CardShimmer';

// Component for rendering shimmer effect
const ShimmerEffect = () => {
  return (
    <Grid
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {/* Map over the array to render CardShimmer components */}
          {[...Array(12)].map((index: number) => (
            <Grid key={index} sx={{margin: 1}}>
              <CardShimmer />
            </Grid>
          ))}
    </Grid>
  )
}

export default ShimmerEffect;
