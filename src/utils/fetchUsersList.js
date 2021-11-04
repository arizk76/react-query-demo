import axios from "axios";

export const fetchUsersList = async ({ url }) => {
  const data = await axios
    .get(`${url}`)
    .then((response) => {
      // handle success
      return response;
    })
    .catch((error) => {
      // handle error
      return error;
    });
  return data;
};
