import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes";

import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
