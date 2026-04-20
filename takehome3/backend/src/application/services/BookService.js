const logger = require("../../infrastructure/config/logger");

class BookService {
  constructor(bookRepo) {
    this.bookRepo = bookRepo;
  }

  async createBook(data) {
    logger.info("Creating book");
    return await this.bookRepo.create(data);
  }

  async getAllBooks() {
    logger.info("Fetching all books");
    return await this.bookRepo.findAll();
  }

  async updateBook(id, data) {
    logger.info("Updating book " + id);
    return await this.bookRepo.update(id, data);
  }

  async deleteBook(id) {
    logger.info("Deleting book " + id);
    return await this.bookRepo.delete(id);
  }
}

module.exports = BookService;