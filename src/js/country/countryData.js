import { apiUrlAdress } from "./keys";
export const userCountryData = fetch(apiUrlAdress)
  .then(res => res.json())
  .then(response => response)
  .catch(error => {
    const newError = new Error("something went wrong");
    newError.data = error;
    newError.message =
      "Can't get user location country code, continue with default country code";
    newError.status = "fail";
    return newError;
  });
