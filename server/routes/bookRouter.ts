import express from "express";
import bookController from "../controllers/bookController.ts";
import {
  OpenAIChat,
  OpenAIEmbedding,
} from "../controllers/openaiController.ts";
import { upsertDataToPinecone } from "../controllers/pineconeController.ts";
import { generateText2Image, generatePageImages } from "../controllers/stabilityController.ts";

//mocked data import to work with front end rendering - to be removed later
const mockGeneratedStory: string[] = [
  "Once upon a time, in a land filled with shimmering dreams and gently twinkling stars, there lived a young girl named Chihiro. Chihiro had a heart full of wonder and imagination, but little did she know, she would soon enter a world unlike any other.",
  "One sunny afternoon, as Chihiro and her parents wandered down a mysterious path, they stumbled across a hidden tunnel. Curiosity bubbled over, and with a sense of adventure, they stepped through it, discovering a world that was stranger than their wildest dreams.",
  "This was the Spirit World, where friendly creatures floated gracefully and the air sparkled with enchantment. But as night fell, a shadowy spell was cast over Chihiro's parents, turning them into curious creatures of the night. Chihiro gasped in wonder and concern, determined to break the spell.",
  "Guided by shimmering fireflies and whispering winds, Chihiro made her way to Yubaba, the wise witch who held sway over the Spirit World. Yubaba, with her big, twinkling eyes, listened to Chihiro's story and agreed to help, but only if Chihiro showed courage and kindness beyond measure.",
  "With Yubaba's guidance, Chihiro set off on a journey filled with fantastical friends—No-Face, the gentle spirit who loved to share, and Haku, the shape-shifting dragon, who flew like the breeze. Together, they journeyed through enchanted forests and across sparkling rivers.",
  "Along the way, Chihiro gathered enchanted flowers from the Glade of Goodness, each petal radiating love and hope. She collected laughter from the bubbling Brook of Giggles, and a sprinkle of stars from the Sky of Wishes.",
  "With her heart full of newfound magic and joy, Chihiro faced the night sky, where the curse lay hidden. She sprinkled the Glade's petals, giggled with the brook's laughter, and made a wish upon the sparkling stars.",
  "And with a glow of vibrant magic, the curse lifted! Her parents, restored from their creature forms, hugged Chihiro tight, grateful for her courage and the love that had guided her.",
  "Together, Chihiro and her family made their way back through the tunnel, returning home with memories of the Spirit World and a heart full of courage. Chihiro never forgot that day, and every now and then, when the stars twinkled just right, she could almost hear the whispers of the spirits on the warm, gentle breeze.",
]; // end mock data import

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
});

bookRouter.post(
  "/",
  bookController.postBook, // res.locals.metadata; pulls the metadata from req.body; creates a new book in the database
  // here we should generate the cover
  OpenAIChat, // res.local.generatedStory; generates the story text; updates the book model with the generated story
  // generateText2Image,  generates the story images of each page after story is returned in an array
  OpenAIEmbedding, // res.locals.embedding; generates the embedding
  upsertDataToPinecone,
  (req, res) => {
    const response = {
      metadata: res.locals.metadata,
      generatedStory: mockGeneratedStory,
      coverImgUrl: "testUrl",
    };
    // res.status(200).json(res.locals.generatedStory);
    res.status(200).json(response);
  },
);

export default bookRouter;
