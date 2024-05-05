export const fetchSampleData = async (offset: number) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

  const response = await fetch(URL, requestOptions);
  const result = await response.json();
  return result;
};
