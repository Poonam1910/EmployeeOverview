import axios from "axios";
import { toast } from "react-toastify";
import logger from './logger';
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.push({ error, expectedError });
  toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
