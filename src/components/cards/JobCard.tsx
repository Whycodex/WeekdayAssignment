import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import { AccessTime as AccessTimeIcon } from "@mui/icons-material";

const JobCard = ({data}:any) => {
  console.log(data);
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 1, borderRadius: 5 }}>
      <CardContent>
        <Chip
          icon={<AccessTimeIcon />}
          label="Posted 10 days ago"
          size="small"
          sx={{
            mb: 2,
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid grey",
          }}
        />
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h1">h</Typography>
          <Grid>
            <Typography variant="h6" component="div" color="text.secondary">
              company
            </Typography>
            <Typography variant="h6" component="div">
              Backend Engineer
            </Typography>
            <Typography variant="caption" sx={{ mb: 1.5 }}>
              Bangalore
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Estimated Salary: ₹18 - 35 LPA
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          About Company:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          FamPay is building India's first neo-bank exclusively for teens.
          FamPay helps teens make their own online and offline payments through
          UPI, FamPay App and FamCard. Our aim is to make banking cool for teens
          and to help them learn the value of money, savings and spending
          wisely. We are on a mission to raise a new, financially-aware
          generation, and drive 250 Million+ Indian teenagers to kickstart their
          financial journey super early in their life.
        </Typography>
        <Button variant="text" color="primary" sx={{ mt: 2 }}>
          View job
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Minimum Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2 years
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
          Easy Apply
        </Button>
        <Button variant="outlined" color="primary">
          Unlock referral asks
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
