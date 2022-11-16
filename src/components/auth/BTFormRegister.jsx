import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import AuthDataService from "@/services/AuthDataService";
import { ToastContainer, toast } from 'react-toastify';


const BTFormRegister = () => {
  const navigate = useNavigate()

  const submitRegister = async (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    if (password.length < 8) {
      alert('your passowrd must be more than 8 chars')
    }
    if (!email) {
      alert('Fill the field with your email')
    }
    if (!name) {
      alert('Fill the field with your name')
    }

    const response = await AuthDataService.register({
      name,
      email,
      password
    })


    if (response.status === 201) {
      toast.success("User Created")
      setTimeout(() => {
        navigate("/")
      }, 1500);
    } else {
      toast.error("Something wrong happened, try again or contact the developer")
    }

  }

  return (
    <section id="btlogin" className="flex-center-items h-screen">
      <Form onSubmit={submitRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Register now !
          </Button>
          <Button onClick={() => navigate("/")} variant="info" size="lg">
            Already has an account ?
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </section>
  );
}

export default BTFormRegister