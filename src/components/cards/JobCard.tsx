import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import {
  HourglassTopOutlined as HourGlassIcon,
  CheckBox as CheckIcon,
  FlashOnOutlined as FlashOnIcon,
} from "@mui/icons-material";

import { JobDescription } from "../../redux/slices/dataSlice";

interface JobCardProps {
  data: JobDescription;
}

// JobCard component to display job details
const JobCard = ({ data }: JobCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        maxHeight: 700,
        margin: 2,
        boxShadow: 2,
        borderRadius: "20px",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
          transform: "scale(1.003)",
        },
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        {/* Chip displaying how long ago the job was posted */}
        <Chip
          icon={<HourGlassIcon sx={{ height: 12, width: 12 }} />}
          label="Posted 10 days ago"
          size="small"
          sx={{
            mb: 2,
            backgroundColor: "transparent",
            color: "#0f0f0f",
            border: "1px solid #d0d0d0",
            borderRadius: 2.5,
            fontSize: 10,
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          {/* Company logo */}
          <Avatar
            src={data.logoUrl}
            alt="logo"
            sx={{ width: 60, height: 60, borderRadius: 0, marginRight: 2 }}
          />
          <Grid>
            {/* Company name, job role, and location */}
            <Typography
              sx={{ fontSize: 14, color: "#c0c0c0", fontWeight: 600 }}
            >
              {data.companyName}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>{data.jobRole}</Typography>
            <Typography sx={{ fontSize: 12 }}>{data.location}</Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 1, display: "flex" }}>
          {/* Display estimated salary range */}
          <Typography sx={{ fontSize: 14, color: "#707070" }}>
            Estimated Salary: ₹{data.minJdSalary} - {data.maxJdSalary} LPA
          </Typography>
          {/* Check icon for salary confirmation */}
          <CheckIcon
            sx={{ width: 18, height: 18, color: "green", marginLeft: 1 }}
          />
        </Grid>
        <Typography sx={{ fontSize: 16, mt: 2 }}>About Company:</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>About us</Typography>
        {/* Display a snippet of job details from the company */}
        <Typography sx={{ fontSize: 14 }}>
          {data.jobDetailsFromCompany.slice(0, 480)}
        </Typography>
        {/* Button to view job details */}
        <Typography
          sx={{
            textAlign: "center",
            position: "absolute",
            bottom: "180px",
            left: "40%",
            zIndex: "10",
            cursor: "pointer",
            color: "blue",
            fontSize: 14,
          }}
        >
          View job
        </Typography>
        {/* Gradient overlay at the bottom */}
        <Grid
          sx={{
            padding: "100px",
            position: "absolute",
            bottom: "170px",
            background: "linear-gradient(to top, white, transparent)",
            width: "100%",
          }}
        ></Grid>
        <Typography
          sx={{ mt: 4, fontSize: 14, color: "#989898", fontWeight: 600 }}
        >
          Minimum Experience
        </Typography>
        {/* Display minimum experience required */}
        <Typography sx={{ fontSize: 14 }}>{data.minExp} years</Typography>

        {/* Button for easy application */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#00FFAB",
            color: "#000",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#00DD9A",
              boxShadow: "none",
            },
            textTransform: "none",
            fontSize: "14px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlashOnIcon sx={{ color: "#eee000", marginRight: 1 }} />
          Easy Apply
        </Button>

        <Button
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: "#6200EA",
            color: "white",
            borderRadius: "8px",
            width: "100%",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#5A00D2",
              boxShadow: "none",
            },
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AvatarGroup max={2}>
            <Avatar
              sx={{ height: 22, width: 22 }}
              alt="Person 1"
              src="https://cdn-icons-png.freepik.com/512/7235/7235981.png"
            />
            <Avatar
              sx={{ height: 22, width: 22, marginRight: 1 }}
              alt="Person 2"
              src="https://cdn-icons-png.freepik.com/512/7235/7235981.png"
            />
          </AvatarGroup>
          Unlock referral asks
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
