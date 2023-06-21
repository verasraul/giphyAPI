
import axios from "axios"
import dotenv from "dotenv"
dotenv.config();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const button = document.querySelector("button"); //step 1
const giphyInput = document.querySelector("input"); //step 1


button.addEventListener('click', async () => {
  let giphy = giphyInput.value;
  try {
    let response = await axios.get(
      `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`
    );
    console.log(response)
    let gif = response.data.data;
    for (let i = 0; i < gif.length; i++){
      let giphyObj = gif[i].images.fixed_height_small.url;
      let newImg = document.createElement('img');
      newImg.setAttribute("src", giphyObj);
      document.querySelector('div').appendChild(newImg);
    }
  } catch (e) {
    console.log(e);
  }
})
