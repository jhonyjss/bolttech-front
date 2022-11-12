import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BTFormLogin from "./components/login/BTFormLogin";
import BTNavbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BTNavbar />
      <BTFormLogin />
    </>
  );
}

export default App;
