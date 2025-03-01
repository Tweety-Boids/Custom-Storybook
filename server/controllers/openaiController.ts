import { RequestHandler } from "express";
import { ServerError } from "../../types/types";
import OpenAI from "openai";
import 'dotenv/config';

export const queryOpenAIEmbedding: RequestHandler = async (_req, res, next) => {
    const { userQuery } = res.locals;
    if (!userQuery) {
      const error: ServerError = {
        log: 'queryOpenAIEmbedding did not receive a user query',
        status: 500,
        message: { err: 'An error occurred before querying OpenAI' },
      };
      return next(error);
    }
  
    try{
      // console.log("userQuery in openAIcontroller", userQuery)
  
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        timeout: 60000 // 60 sec timeout
      });
  
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: `${userQuery}`,
        encoding_format: "float",
      });
      // console.log('embedding', embeddingResponse.data[0].embedding);
      const embeddingArr = embeddingResponse.data[0].embedding
      res.locals.embedding = embeddingArr
      return next(); 
      
    }catch(err){
      console.error("An error occured in aiResponse: ", err)
      return next(err);
    }
  
    // res.locals.embedding = [0, 1, 2];
    // return next();
};
  

export const queryOpenAIChat: RequestHandler = async (_req, res, next) => {
    const { userQuery, pineconeQueryResult } = res.locals;
    if (!userQuery) {
      const error: ServerError = {
        log: 'queryOpenAIChat did not receive a user query',
        status: 500,
        message: { err: 'An error occurred before querying OpenAI' },
      };
      return next(error);
    }
    if (!pineconeQueryResult) {
      const error: ServerError = {
        log: 'queryOpenAIChat did not receive pinecone query results',
        status: 500,
        message: { err: 'An error occurred before querying OpenAI' },
      };
      return next(error);
    }
  
    try{
      console.log("userQuery in openAIcontroller", userQuery)
      const sysDirections: string = ` system directions go here `
      const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
          timeout: 60000, //60 sec timeout
        });
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{"role": 'system',
            "content": `${sysDirections}`},
          {
            "role": 'user',
            "content": `User input: ${userQuery}, Vector Database Recommendation: Title: ${JSON.stringify(pineconeQueryResult)}, Plot: ${JSON.stringify(pineconeQueryResult)} `
          },
        ],
      });
      const aiResponse = completion.choices[0].message;
      console.log('ai response',aiResponse.content);
      res.locals.movieRecommendation = aiResponse.content as string;
    // res.locals.movieRecommendation =
    //   'Wishmaster - A malevolent genie wreaks havoc after being freed, leading to a battle between his dark desires and those trying to stop him.';
      return next();
    }catch(err){
      console.error("An error occured in aiResponse: ", err)
      return next(err);
    }
  
    // res.locals.movieRecommendation =
    //   'Wishmaster - A malevolent genie wreaks havoc after being freed, leading to a battle between his dark desires and those trying to stop him.';
    // return next();
  };