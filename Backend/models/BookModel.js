import mongoose from "mongoose";

let BookSchema = new mongoose.Schema(
  {
    BookName: {
      type: String,
      required: true,
      minlength: [3, "Book Name must be at least 3 characters long"],
    },
    BookPoster: {
      type: String,
      required: true,
    },
    BookDesc: {
      type: String,
      required: true,
      minlength: 100,
    },
    BookAuthor: {
      type: String,
      required: true,
    },
   BookPrice: {
  type: Number,
  required: true,
  min: [0, "Price cannot be negative"],
  max: [1000, "Price too high"], // Change from 5 to a reasonable max price
},
    BookCategory: {
      type: String,
      Enum: [
        "Fiction",
        "Non-Fiction",
        "Self-Help",
        "Technology",
        "Horror",
      ],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("BookModel", BookSchema);


