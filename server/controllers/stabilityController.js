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
  // test: `generate a book cover of the following JSON object: ${res.locals.userQuery}`,
  perk: `The cozy Central Perk café is filled with holiday decorations, warm lighting, and a light snowfall visible through the windows. Chandler, ${characters.chandler}, is sprawled on the couch, rolling his eyes while Phoebe, ${characters.phoebe}, passionately sings an original Christmas song. Ross, ${characters.ross}, bundled in a puffy jacket, gestures dramatically as he recounts a ridiculous paleontology discovery. Monica, ${characters.monica}, is decorating cookies with laser-like focus, while Rachel, ${characters.rachel}, is attempting (and failing) to wrap a gift. Joey, ${characters.joey} wearing a Santa hat, grins as he flirts with a barista, clearly improvising a pickup line. you must include all characters referenced.`,
 


}

const testStory = [
  "Lena had always been an adventurous girl, but she never expected her curiosity to lead her somewhere truly extraordinary. One afternoon, while exploring the overgrown fields behind her grandmother’s cottage, she leaned too far over the edge of an old stone well. The ground beneath her feet crumbled, and with a gasp, she tumbled into the darkness below. Instead of hitting cold water or solid stone, she landed softly on a bed of glowing moss, her fall cushioned as if by magic itself.",
  
  "As she stood up, Lena realized she was no longer in the well but in a vast underground world bathed in golden light. Towering mushrooms pulsed with bioluminescence, and streams of liquid silver wound through meadows of shimmering blue grass. Strange, melodic whispers floated in the air, carried by an unseen wind. A small, fox-like creature with wings hovered nearby, its emerald eyes twinkling with mischief. 'You must be the new traveler,' it said with a grin, its voice like the chime of tiny bells.",
  
  "Before Lena could ask where she was, the ground beneath her feet trembled, and the fox-creature’s ears twitched. 'The Queen of Echoes will want to see you,' it said hurriedly. 'She’s been waiting for someone like you to arrive.' Lena had no choice but to follow as the creature darted through a tunnel of glowing vines. As they emerged into a vast, open palace of crystal, Lena saw a figure sitting upon a throne of woven starlight—a woman with silver hair and eyes that held entire galaxies within them.",
  
  "The Queen studied Lena with a knowing smile. 'You are here because your heart is open to wonder,' she said. 'And in this land, wonder is power.' With a wave of her hand, a golden key appeared in Lena’s palm. 'This key unlocks the path between your world and ours. Use it wisely.' As the vision of the crystal palace began to fade, Lena found herself back at the edge of the well, the golden key clutched tightly in her hand. She knew her adventure was only just beginning."
]
 

const stabilityController = {

  async generatePageImages (req, res, next) {

    try {
      const storyArray = testStory;
  
      await Promise.all(storyArray.map(async (element, page) =>  {

        const payload = {
          prompt: `a black and white turn of the century book illustration of the following plot: ${element}` ,
          output_format: "jpeg",
          aspect_ratio: "1:1",
          style_preset: "line-art",
        };
        // console.log ('Page: ', page);
        // console.log (element);

        const response = await axios.postForm(
          `https://api.stability.ai/v2beta/stable-image/generate/core`,
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
          //test line while not using locals
          fs.writeFileSync(`./test_${page}.jpeg`, Buffer.from(response.data));
          // fs.writeFileSync(`./${res.locals.userQuery.title || 'test' }_${page}.jpeg`, Buffer.from(response.data));
          console.log (response.status, "we have finished generating the image");
          
          //mark in when using proper end points
          // res.locals.userQuery.img_id = `${res.locals.userQuery.title}_${page}.jpeg`;
          // console.log("COMPLETED IMG GEN: ", res.locals.userQuery);
        } else {
          throw new Error(`*******${response.status}: ${response.data.toString()}`);
        }


      }));


      next();



    } catch (error) {
      console.error("Error generating image:", error.message);
      throw error;
    }

  },

  async generateText2Image(req, res, next) {

    try {

      const payload = {
          prompt: `a book cover for a story with the plot summary: ${res.locals.userQuery.plot}` ,
          output_format: "jpeg",
          aspect_ratio: "9:16",
      };

      console.log("IMAGE PROMPT: ", payload);

      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/core`,
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
        fs.writeFileSync(`./${res.locals.userQuery.title}.jpeg`, Buffer.from(response.data));
        console.log (response.status, "we have finished generating the image");

        res.locals.userQuery.img_id = `${res.locals.userQuery.title}.jpeg`;
        console.log("COMPLETED IMG GEN: ", res.locals.userQuery);

        next();
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

stabilityController.generatePageImages()

// stabilityController.generateText2Image()
//   .catch((err) => console.error("Failed to generate image:", err));

export default stabilityController;