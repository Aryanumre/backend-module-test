const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
