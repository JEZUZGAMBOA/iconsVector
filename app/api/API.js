import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default axios.create({
  //baseURL: `http://web.tya.com.mx:8094/autorizach.asmx/`,
  baseURL: `http://web.tya.com.mx:8094/autorizach.asmx/`,
  timeout: 3000,
});
