import axios from "./config";
import { displayLog } from "./functions";

export const apiCall = async (method, url, reqData, params) => {
   let token = "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";
   return axios({
      method: method,
      url: url,
      params: params,
      data: reqData,
      headers: {
         "Content-Type": "application/json",
         Authorization: `token ${token}`,
      },
   })
      .then((response) => {
         console.log("\n\n\n RESPONSE :::", response);
         let data = response.data;
         if (response.status == 200) {
            // displayLog(1, "Success");
         } else {
            displayLog(0, "Something went wrong");
         }
         return data;
      })
      .catch(async (error) => {
         console.log("\n\n\n ERROR :::", error.message);
         // displayLog(0, error.message);
      });
};
