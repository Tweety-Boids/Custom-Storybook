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
  coverImg: String,
  bookImgs: [String],
  story: [String],
});

export const Book = mongoose.model("Book", bookSchema);
