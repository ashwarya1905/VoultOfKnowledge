import BookModel from "../Models/BookModel.js";
import { Router } from "express";

const router = Router();

router.get("/list", async (req, res) => {
  let allBooks = await BookModel.find();
  return res.json(allBooks);
});

router.get("/byId:id", async (req, res) => {
  let Id = req.params.id;
  let Book = await BookModel.findById(Id);
  return res.json(Book);
});
router.post("/create", async (req, res) => {
  let newBook = new BookModel(req.body);
  await newBook.save();
  return res.json(newBook);
});

router.put("/update:id", async (req, res) => {
  let Id = req.params.id;
  await BookModel.findByIdAndUpdate(Id, req.body);
  return res.json({
    message: "Book is updated",
  });
});

router.delete("/delete:id", async (req, res) => {
  let Id = req.params.id;
  await BookModel.findByIdAndDelete(Id);
  return res.json({
    message: "Book is deleted",
  });
});

export default router;
