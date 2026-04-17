import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    sub1: "",
    sub2: "",
    sub3: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateResult = (student) => {
    const total =
      Number(student.sub1) +
      Number(student.sub2) +
      Number(student.sub3);
    const percentage = (total / 300) * 100;
    const status = percentage >= 40 ? "Pass" : "Fail";

    return { total, percentage: percentage.toFixed(2), status };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);

    setFormData({
      name: "",
      roll: "",
      sub1: "",
      sub2: "",
      sub3: "",
    });
  };

  return (
    <div className="container">
      <h1>🎓 Student Result Management</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="roll"
          placeholder="Roll No"
          value={formData.roll}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="sub1"
          placeholder="Subject 1"
          value={formData.sub1}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="sub2"
          placeholder="Subject 2"
          value={formData.sub2}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="sub3"
          placeholder="Subject 3"
          value={formData.sub3}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Result</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => {
            const result = calculateResult(student);

            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.sub1}</td>
                <td>{student.sub2}</td>
                <td>{student.sub3}</td>
                <td>{result.total}</td>
                <td>{result.percentage}%</td>
                <td
                  style={{
                    color: result.status === "Pass" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {result.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;