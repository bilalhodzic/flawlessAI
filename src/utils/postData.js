/* Libraries */

import axios from "axios";

const BASE_URL = "http://enzzza-dev.site/api/v1";

const postData = async (url, data) =>
  new Promise(async (resolve, reject) => {
    const parsedData = JSON.stringify(data);

    try {
      const result = await axios({
        method: "POST",
        url: `${BASE_URL}${url}`,
        data: parsedData,
      });

      // console.log(result);

      resolve(result.data);
    } catch (error) {
      console.log(`Error: ${error}`);

      reject(error);
    }
  });

export default postData;
