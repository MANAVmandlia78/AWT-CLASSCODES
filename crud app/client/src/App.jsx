import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const API = "http://localhost:3000";

  // 📄 Fetch users
  const getUsers = async () => {
    try {
      const res = await axios.get(`${API}/users`);
      setUsers(res.data.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ➕ Add user
  const addUser = async () => {
    try {
      if (!name) {
        return setError("Name is required");
      }

      await axios.post(`${API}/add`, { name });
      setName("");
      getUsers();
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Add failed");
    }
  };

  // ❌ Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API}/delete/${id}`);
      getUsers();
    } catch (err) {
      setError("Delete failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple CRUD App</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add</button>

      <h3>Users List</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;