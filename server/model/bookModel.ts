import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  metadata: {
    title: String,
    author: String,
    setting: String,
    plot: String,
    characters: [String],
    artStyle: String,
    genre: String,
},
// ai generated items
  coverImg: {name: String, data: Buffer, contentType: String},
  bookImgs: [{name: String, data: Buffer, contentType: String}],
  story: [String],
});

export const Book = mongoose.model("Book", bookSchema);
