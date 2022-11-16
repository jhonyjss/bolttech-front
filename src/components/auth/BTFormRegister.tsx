import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";

type Props = {};
export default function BTFormRegister({}: Props) {
  return (
    <section id="btlogin" className="flex-center-items h-screen">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
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
          <Button variant="info" size="lg">
            Already has ann account ?
          </Button>
        </div>
      </Form>
    </section>
  );
}
