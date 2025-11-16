const API_URL = "https://animal-api-two.vercel.app/";

// API
export const request = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
