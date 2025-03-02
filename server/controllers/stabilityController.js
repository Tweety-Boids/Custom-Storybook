import fs from "node:fs";
import axios from 'axios';
import FormData from "form-data";

import dotenv from 'dotenv';

dotenv.config();

const stabilityController = {
    async generateImage(req, res, next) {

      try {
        const payload = {
            prompt: "the art work for a romance novella, style is black and white, at the top there is Text that reads: TITLE",
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
    }
}

stabilityController.generateImage()
  .catch((err) => console.error("Failed to generate image:", err));

export default stabilityController;