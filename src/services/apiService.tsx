export const fetchSampleData = async (offset: number) => {
  // Create headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Prepare request body
  const body = JSON.stringify({
    limit: 30,
    offset: offset,
  });

  // Set up request options
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  // Define API URL
  const URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

  // Make the API call
  const response = await fetch(URL, requestOptions);
  const result = await response.json();
  return result;
};
