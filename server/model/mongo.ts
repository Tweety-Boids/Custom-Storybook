import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
import { ServerApi, UserPreferenceBody } from '../../types/types';

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

const userSchema = new mongoose.Schema<UserPreferenceBody>({
  title: { type: String },
  art_style: { type: String },
  author: { type: String },
  character: { type: String },
  genre: { type: String },
  setting: { type: String },
});

const User = mongoose.model<UserPreferenceBody>('User', userSchema);

export default User;
// node --loader ts-node/esm /Users/stevenyeung/Custom-Storybook/server/model/mongo.ts