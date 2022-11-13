import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";

type Props = {};
export default function BTFormLogin({}: Props) {
  return (
    <section id="btlogin" className="flex-center-items h-screen">
      <Form>
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
          <Button variant="info" size="lg">
            Register
          </Button>
        </div>
      </Form>
    </section>
  );
}
