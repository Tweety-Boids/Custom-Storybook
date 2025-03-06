import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
import { ServerApi, Characters } from '../../types/types';

dotenv.config();

const uri = `mongodb+srv://stevenyeung1020:${process.env.MONGOOSE_PASSWORD}@cluster0.2ufco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions: {
  serverApi: ServerApi
} = {
  serverApi: {
      version: "1",
      strict: true, 
      deprecationErrors: true,
  },
};

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB!");

    await mongoose.connection.db!.admin().command({ ping: 1 });
    console.log("Pinged your deployment.");

  } catch (error) {
    console.error("Error connecting: ", error);
  }
}

run().catch(console.dir);

const characterSchema = new mongoose.Schema<Characters>({
  name: { type: String },
  pronouns: { type: String },
  catch_phrase: { type: String },
  personality: { type: String },
  special_talent: { type: String },
  hair_color: { type: String },
  eye_color: { type: String },
  physical_description: { type: String },
});

const Characters = mongoose.model<Characters>('Characters', characterSchema);

export default Characters;
// node --loader ts-node/esm /Users/stevenyeung/Custom-Storybook/server/model/mongo.ts