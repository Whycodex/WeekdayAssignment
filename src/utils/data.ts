// Data for filtering job listings
export const filterData = {
  Roles: {
    placeholder: "Select Role",
    tag: "jobRole",
    entries: [
      "Backend",
      "Frontend",
      "FullStack",
      "Ios",
      "Flutter",
      "React Native",
      "Android",
    ],
  },
  Employees: {
    placeholder: "Select No of Employees",
    tag: "teamSize",
    entries: ["1-10", "11-20", "21-50", "51-100", "101-200", "200+"],
  },
  Experience: {
    placeholder: "Select Experience Level",
    tag: "minExp",
    entries: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  Remote: {
    placeholder: "Select Remote Option",
    tag: "location",
    entries: ["Remote", "Hybrid", "In-office"],
  },
  Salary: {
    placeholder: "Select Salary Range",
    tag: "minJdSalary",
    entries: ["$50k-$75k", "$75k-$100k", "$100k+"],
  },
};

// Function to validate job data
export const isValidJobData = (data: {
  jdUid: string;
  logoUrl: string;
  companyName: string;
  jobRole: string;
  location: string;
  minExp: number;
  minJdSalary: number;
  maxJdSalary: number;
  jobDetailsFromCompany: string;
}) => {
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
