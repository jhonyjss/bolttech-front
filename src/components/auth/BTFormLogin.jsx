import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import AuthDataService from "@/services/AuthDataService";
import { ToastContainer, toast } from 'react-toastify';
import useAuth from "@/hooks/auth.hook"

const BTFormLogin = () => {
  const navigate = useNavigate()
  const { login, getUser } = useAuth()
  console.log(getUser().then(res => console.log(res)))

  async function onLogin(e) {
    e.preventDefault()
    try {
      const response = await AuthDataService.login(e.target[0].value, e.target[1].value)
      login(response.data)
    } catch (error) {
      console.error(error)
      toast.error("User not found")
    }

  }

  return (
    <section id="btlogin" className="flex-center-items h-screen">
      <Form onSubmit={onLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Login
          </Button>
          <Button onClick={() => navigate("/register")} variant="info" size="lg">
            Register
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </section>
  );
};

export default BTFormLogin;
