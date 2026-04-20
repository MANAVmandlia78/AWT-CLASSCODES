import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./shared/components/ProtectedRoute";

import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Dashboard from "./features/users/Dashboard";
import AdminPage from "./features/users/AdminPage"; // make sure this exists

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="librarian">
              <AdminPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;