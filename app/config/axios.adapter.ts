import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosAdapter = {
  fetchData: async (url: string, options = {}) => {
    try {
      const response = await axiosInstance(url, options);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Could not get data");
    }
  },
};