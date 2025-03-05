import fs from "node:fs";
import axios from 'axios';
import FormData from "form-data";

import dotenv from 'dotenv';

dotenv.config();

const characters = {
   protag1: "a young man with striking facial features. He has medium-length, wavy dark brown hair that falls naturally around his face, with a slightly tousled appearance. His eyes are deep brown, framed by thick, well-defined eyebrows with a natural arch. His facial structure is sharp and symmetrical, featuring high cheekbones, a straight and well-proportioned nose, and a strong yet refined jawline. His lips are full and slightly parted, with a neutral or subtly pensive expression. He has light stubble on his chin, upper lip, and along his jawline, adding a touch of ruggedness to his otherwise smooth, fair complexion. His skin is clear and evenly toned, with a soft natural glow.",
   rachel: "Fashionable and confident, typically in trendy outfits. Carries herself with a mix of charm and slight cluelessness.",
   joey: "Laid-back and charming, often in casual attire like leather jackets or comfortable sweaters. Usually with a goofy grin.",
   monica: "Organized and competitive, usually in stylish yet practical attire. Often seen with a look of determination or concern.",
   ross: "Nerdy and somewhat awkward, dressed in smart-casual layers. Often holding a coffee cup with an exasperated or dramatic expression.",
  phoebe: "Eccentric and free-spirited, often in flowy, bohemian outfits. Expressive and unpredictable, with a guitar always nearby.",
  chandler: "Sarcastic and witty, often lounging casually with an ironic smirk. Typically wears relaxed button-downs and sweater vests.",

}



const PromptStore = {
  novella: `the artwork for a Romance novella. the source image is the main character, depict this person in action, at the top there is Text that reads: TITLE`,
  pictureBookChar: 'The artwork for a cute childrens book, the scene is a cute tall lanky monster character with red fur and alot of bright red hair on it\'s head, the style is watercolor line illistration on a blank background, the character is very cute and appealing to kids',
  protagsChar: 'a natural portrait of the protagonist of a novel. the background is white.',
  change: `show me this character performing a task, the subject is in fullframe`,
  zoo: 'the charcacter is at the Zoo',
  hug: 'you are an expert animator, you will be recieving two characters, you will output an image in the exact same art style, the backgroung will be a school, the two characters are holding hands. you will priortitize keeping the characters looking the same, and deprioritize them being in the same positon',
  monsters: 'a silly monster with red hair and a silly horned monster with blue fur are shaking hands at their school',
  background: 'change the background to be a British School',
  test: "A highly detailed, photorealistic full-body portrait of a young man standing in a lush green park during daytime. He has medium-length, wavy dark brown hair that falls naturally around his face with a slightly tousled look. His deep brown eyes are framed by thick, well-defined eyebrows, and his facial structure is sharp and symmetrical, with high cheekbones, a straight nose, and a strong yet refined jawline. His full lips are slightly parted, and he has light stubble on his chin, upper lip, and along his jawline, adding a touch of ruggedness to his smooth, fair complexion.He is wearing a simple, fitted white T-shirt and casual dark jeans, paired with comfortable sneakers. His posture is relaxed, with his hands casually in his pockets (or arms crossed, depending on preference), and he gazes into the distance with a calm and introspective demeanor. The camera captures his entire figure, ensuring a full-body composition with a straight-on or slightly low-angle shot for a dynamic perspective.The park around him is filled with lush green grass, tall leafy trees, and warm sunlight filtering through the branches, casting a dappled glow on the scene. A few park benches and people enjoying a peaceful afternoon are visible in the background, slightly blurred to maintain focus on the subject. The atmosphere is tranquil, with a soft breeze subtly moving his hair and clothes.",
  perk: `The cozy Central Perk café is filled with holiday decorations, warm lighting, and a light snowfall visible through the windows. Chandler, ${characters.chandler}, is sprawled on the couch, rolling his eyes while Phoebe, ${characters.phoebe}, passionately sings an original Christmas song. Ross, ${characters.ross}, bundled in a puffy jacket, gestures dramatically as he recounts a ridiculous paleontology discovery. Monica, ${characters.monica}, is decorating cookies with laser-like focus, while Rachel, ${characters.rachel}, is attempting (and failing) to wrap a gift. Joey, ${characters.joey} wearing a Santa hat, grins as he flirts with a barista, clearly improvising a pickup line. you must include all characters referenced.`,
 


}

const stabilityController = {

  async generateText2Image(req, res, next) {

    try {
      const payload = {
          prompt: PromptStore.perk, //perameratize the prompt here
          output_format: "jpeg",
          aspect_ratio: "9:16",
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
        image: fs.createReadStream("client/src/assets/monsters/screenshot_2025-03-03_at_9.01.30___pm_720.png"),
        prompt: PromptStore.hug,
        mode: "image-to-image",
        strength: 0.3, //adhearance to the image provided
        cfg_scale: 10, //adherance to the text prompt
        output_format: "jpeg",
        seed: 0,
        model: 'sd3-medium',
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
        fs.writeFileSync("./change.jpeg", Buffer.from(response.data));
      } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
      }

    } catch (error ) {
      console.error("Error generating image:", error.message);
      throw error;
    }
  
  },


  async generateSearchAndReplace (req, res, next) {
  
    try {
      const payload = {
        image: fs.createReadStream("png-transparent-woman-alpha-channel-urban-women-tshirt-sport-people-thumbnail.png"),
        prompt: PromptStore.background,
        output_format: "png",
      };
      
      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/edit/inpaint`,
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
        fs.writeFileSync("./edit.png", Buffer.from(response.data));
      } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
      }

    } catch (error ) {
      console.error("Error generating image:", error.message);
      throw error;
    }
  
  }


}


// stabilityController.generateText2Image()
//   .catch((err) => console.error("Failed to generate image:", err));

export default stabilityController;