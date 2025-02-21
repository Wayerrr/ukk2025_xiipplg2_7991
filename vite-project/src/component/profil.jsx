import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Navbar from ".././navbar";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Wayer");
  const [email, setEmail] = useState("Wayer@gmail.com");
  const [phone, setPhone] = useState("+62 897654321");
  const [location, setLocation] = useState("Malang, Indonesia");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
        <Navbar/>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <Card className="w-50 p-4 shadow-lg rounded-3">
          <Card.Body className="text-center">
            {isEditing ? (
              <Form className="mt-3">
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  className="mt-2 w-100"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Form>
            ) : (
              <>
                <h2 className="mt-3">{name}</h2>
                <p className="text-muted">Siswa SMKN 12 MALANG</p>
                <div className="mt-3 text-muted">
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>{location}</p>
                </div>
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="danger"
                  className="mt-3 w-100"
                  href="/"
                >
                  LOGOut
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProfileCard;
