import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData();
    form.append("username", formData.username);
    form.append("password", formData.password);

    try {
      const response = await fetch("https://listyantidewi.pythonanywhere.com/login", {
        method: "POST",
        body: form, 
      });

      const data = await response.text();

      if (response.ok) {
        console.log("Login berhasil:", data);
        navigate("/home"); 
      } else {
        setError(data);
        console.error("Login gagal:", data);
      }
    } catch (error) {
      setError("Terjadi kesalahan jaringan");
      console.error("Kesalahan saat login:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "8rem", backgroundColor: "#f8f9fa", padding: "3rem", borderRadius: "10px" }}>
      <Container>
        <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", marginBottom: "1rem", color: "grey" }}>
          LOGin
        </div>
        {error && (
          <div style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </div>
        )}
        <Form onSubmit={handleSubmit} style={{ backgroundColor: "white", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={3}></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6} className="d-flex justify-content-center">
              <Button type="submit" className="me-3" variant="success" style={{ width: "100px" }}>
                Login
              </Button>
              <Button as="a" href="/register" variant="danger" style={{ width: "100px" }}>
                Register
              </Button>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
