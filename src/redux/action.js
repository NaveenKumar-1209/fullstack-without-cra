import { LOGIN, REGISTRATION, REGISTRATION_ERROR } from "./types";
import axios from "axios";
import appUrl from "../utils/config";

export const login = (action, payload) => {};

export const registration = (data) => {
  return async (dispatch) => {
    try {
      console.log("Action Data", data);
      const headers = {
        "Content-Type": "application/json",
        // Add any other headers as needed
      };
      let response = await axios.post(appUrl.registration, data, { headers });
      dispatch({
        type: REGISTRATION,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error,
      });
    }
  };
};
