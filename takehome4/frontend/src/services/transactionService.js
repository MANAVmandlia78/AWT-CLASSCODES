import api from "./api";

export const issueBook = (data) => api.post("/transactions/issue", data);
export const returnBook = (id) => api.post(`/transactions/return/${id}`);