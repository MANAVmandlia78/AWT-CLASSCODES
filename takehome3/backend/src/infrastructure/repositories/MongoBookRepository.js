const Book = require("../models/Book");

class MongoBookRepository {
  async create(bookData) {
    return await Book.create(bookData);
  }

  async findAll() {
    return await Book.find();
  }

  async checkBookAvailability(bookId) {
  const book = await Book.findById(bookId);
  return book && book.availableCopies > 0;
}

async decreaseStock(bookId) {
  return await Book.findByIdAndUpdate(
    bookId,
    { $inc: { availableCopies: -1 } },
    { new: true }
  );
}

async increaseStock(bookId) {
  return await Book.findByIdAndUpdate(
    bookId,
    { $inc: { availableCopies: 1 } },
    { new: true }
  );
}

  async findById(id) {
    return await Book.findById(id);
  }

  async update(id, data) {
    return await Book.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Book.findByIdAndDelete(id);
  }
}

module.exports = MongoBookRepository;