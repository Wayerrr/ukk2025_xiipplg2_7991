import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Task() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar />
      <Container>
        <Card className="mt-4">
          <Card.Body>
            {" "}
            <Button className="mt-2" variant="success " onClick={handleShow}>
              Tambah
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Tambah Tugas</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* <FloatingLabel
                  controlId="floating"
                  label="Kategori Tugas"
                  className="mb-3"
                > */}
                  {/* <Form.Select aria-label="Floating label">
                    <option>Pilih Kategori</option>
                  </Form.Select> */}
                {/* </FloatingLabel> */}
                <FloatingLabel
                  controlId="floatingNamaTugas"
                  label="Nama Tugas"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Masukkan Nama Tugas" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingLabels" label="Label Tugas">
                  <Form.Select aria-label="Floating label">
                    <option>Pilih Salah Satu</option>
                    <option value="1">Sudah Selesai</option>
                    <option value="2">Belum Selesai</option>
                  </Form.Select>
                </FloatingLabel>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Tutup
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Tambah
                </Button>
              </Modal.Footer>
            </Modal>
            <Table striped className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Tugas</th>
                  <th>Date</th>
                  <th>Labels</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Task;
