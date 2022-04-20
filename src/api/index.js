import axios from "axios";

// instanceAxios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

export const getNewsByCategory = async (category = "all") => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`
    );

    // console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
