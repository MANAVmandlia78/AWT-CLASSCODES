import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const userCollection = collection(db, "users");

  // CREATE
  const addUser = async () => {
    if (!name) return;

    if (editId) {
      await updateDoc(doc(db, "users", editId), { name });
      setEditId(null);
    } else {
      await addDoc(userCollection, { name });
    }

    setName("");
    getUsers();
  };

  // READ
  const getUsers = async () => {
    const data = await getDocs(userCollection);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  // DELETE
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    getUsers();
  };

  // EDIT (for update)
  const editUser = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Firebase CRUD App</h1>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;