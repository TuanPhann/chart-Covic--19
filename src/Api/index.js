import axios from "axios";

export const getCounTry = () => {
  return axios.get(`https://api.covid19api.com/countries`);
};

export const getReportCounTry = (countrie) => {
  return axios.get(`https://api.covid19api.com/dayone/country/${countrie}`);
};
