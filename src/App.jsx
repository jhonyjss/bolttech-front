import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes";

import Login from "./pages/login";
import Register from "./pages/register";
import Project from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/projects" element={<Project />} />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
