import fs from "node:fs";
import axios from 'axios';
import FormData from "form-data";

import dotenv from 'dotenv';

dotenv.config();



const PromptStore = {
  novella: `the artwork for a Romance novella. the source image is the main character, depict this person in action, at the top there is Text that reads: TITLE`,
  pictureBookChar: 'The artwork for a cute childrens book, the scene is a cute tall lanky monster character with red fur and alot of bright red hair on it\'s head, the style is watercolor line illistration on a blank background, the character is very cute and appealing to kids',
  protagsChar: 'a natural portrait of the protagonist of a novel. the background is white.',
  change: `Using the provided image, generate a new image using the same character, but choose a new action to have them doing`


}

const stabilityController = {

  async generateText2Image(req, res, next) {

    try {
      const payload = {
          prompt: PromptStore.protagsChar, //perameratize the prompt here
          output_format: "jpeg"
      };

      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
        axios.toFormData(payload, new FormData()),
        {
          validateStatus: undefined,
          responseType: "arraybuffer",
          headers: { 
            Authorization: `Bearer ${process.env.STABILITY_AI_API_KEY}`, 
            Accept: "image/*" 
          },
        },
      );
      if(response.status === 200) {
        fs.writeFileSync("./bookcover.jpeg", Buffer.from(response.data));
        console.log (response.status, "we have finished the response");
        
        // res.locals.image = Buffer.from(response.data);

      } else {
        throw new Error(`*******${response.status}: ${response.data.toString()}`);
      }
    } catch (error) {
      console.error("Error generating image:", error.message);
      throw error;
    }
  },


  async generateImage2Image (req, res, next) {
  
    try {
      const payload = {
        image: fs.createReadStream("client/src/assets/monsters/redMoster.jpeg"),
        prompt: PromptStore.change,
        mode: "image-to-image",
        strength: 0.9, //adhearance to the image provided
        cfg_scale: 9, //adherance to the text prompt
        output_format: "jpeg",
        model: 'sd3-medium',
      };
      
      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/upscale/conservative`,
        axios.toFormData(payload, new FormData()),
        {
          validateStatus: undefined,
          responseType: "arraybuffer",
          headers: { 
            Authorization: `Bearer ${process.env.STABILITY_AI_API_KEY}`, 
            Accept: "image/*" 
          },
        },
      );
      
      if(response.status === 200) {
        fs.writeFileSync("./change.jpeg", Buffer.from(response.data));
      } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
      }

    } catch (error ) {
      console.error("Error generating image:", error.message);
      throw error;
    }
  
  }


}


stabilityController.generateImage2Image()
  .catch((err) => console.error("Failed to generate image:", err));

export default stabilityController;