import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://respective-anastassia-wishlistwebapp-7a7676c1.koyeb.app",
});

const setAuthToken = async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

setAuthToken();

export default api;
