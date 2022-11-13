import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.scss";

type Props = {};
export default function BTFormLogin({}: Props) {
  return (
    <section id="btlogin" className="flex-center-items h-screen">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="info" size="lg">
            Register
          </Button>
          <Button variant="primary" type="submit" size="lg">
            Already has ann account ?
          </Button>
        </div>
      </Form>
    </section>
  );
}
