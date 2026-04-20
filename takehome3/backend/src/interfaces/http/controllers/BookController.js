class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  create = async (req, res) => {
    const result = await this.bookService.createBook(req.body);
    res.json(result);
  };

  getAll = async (req, res) => {
    const result = await this.bookService.getAllBooks();
    res.json(result);
  };

  update = async (req, res) => {
    const result = await this.bookService.updateBook(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req, res) => {
    await this.bookService.deleteBook(req.params.id);
    res.json({ message: "Deleted" });
  };
}

module.exports = BookController;