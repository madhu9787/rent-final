import axios from "axios";

// Backend base URL
const BASE_URL = "http://localhost:5000/api/auth";

// REGISTER USER (name + password + role)
export const registerUser = async (name, password, role) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      password,
      role, // 👈 added
    });
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw new Error(err.response.data.message || err.response.data);
    } else {
      throw new Error(err.message);
    }
  }
};

// LOGIN USER (name + password)
export const loginUser = async (name, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      name,
      password,
    });
    return response.data; // { token, user }
  } catch (err) {
    if (err.response && err.response.data) {
      throw new Error(err.response.data.message || err.response.data);
    } else {
      throw new Error(err.message);
    }
  }
};
