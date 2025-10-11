import axios from "axios";

// Backend base URL
const BASE_URL = "http://localhost:5000/api/auth";

// Register user (name + password)
export const registerUser = async (name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      password,
    });
    return response.data;
  } catch (err) {
    // Return backend error message if available
    if (err.response && err.response.data) {
      throw new Error(err.response.data);
    } else {
      throw new Error(err.message);
    }
  }
};

// Login user (name + password)
export const loginUser = async (name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      name,
      password,
    });
    return response.data;
  } catch (err) {
    // Return backend error message if available
    if (err.response && err.response.data) {
      throw new Error(err.response.data);
    } else {
      throw new Error(err.message);
    }
  }
};
