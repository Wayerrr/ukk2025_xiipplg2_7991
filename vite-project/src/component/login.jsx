import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "300px", textAlign: "center" }}>
        <div>
          <h2 style={{
            marginBottom:"1rem"
          }}>LOGiN</h2>
        </div>
        <Form>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <Link to={'/'}>
          <Button variant="secondary" as="input" type="submit" value="Submit" className="w-100" />
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
