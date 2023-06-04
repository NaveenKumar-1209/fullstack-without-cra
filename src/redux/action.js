import { LOGIN, REGISTRATION, REGISTRATION_ERROR } from "./types";
import axios from "axios";
import appUrl from "../utils/config";

export const login = (action, payload) => {};

export const registration = (data) => {
  return async (dispatch) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        // Add any other headers as needed
      };
      let response = await axios.post(appUrl.registration, data, { headers });
      console.log("response", response);
      dispatch({
        type: REGISTRATION,
        payload: response.data,
      });
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data?.message) {
        dispatch({
          type: REGISTRATION_ERROR,
          payload: error?.response?.data?.message,
        });
      }
    }
  };
};
