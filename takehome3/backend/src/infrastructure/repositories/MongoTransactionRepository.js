const Transaction = require("../models/Transaction");

class MongoTransactionRepository {
  async create(data) {
    return await Transaction.create(data);
  }

  async findAll() {
    return await Transaction.find().populate("bookId userId");
  }

  async findOverdueTransactions() {
  const today = new Date();

  return await Transaction.find({
    dueDate: { $lt: today },
    status: "issued"
  }).populate("bookId userId");
}

async overdueWithAggregation() {
  const today = new Date();

  return await Transaction.aggregate([
    {
      $match: {
        dueDate: { $lt: today },
        status: "issued"
      }
    },
    {
      $lookup: {
        from: "books",
        localField: "bookId",
        foreignField: "_id",
        as: "book"
      }
    }
  ]);
}

async renewTransaction(id, newDueDate) {
  return await Transaction.findByIdAndUpdate(
    id,
    { dueDate: newDueDate },
    { new: true }
  );
}

  async findById(id) {
    return await Transaction.findById(id).populate("bookId userId");
  }

  async update(id, data) {
    return await Transaction.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Transaction.findByIdAndDelete(id);
  }
}

module.exports = MongoTransactionRepository;