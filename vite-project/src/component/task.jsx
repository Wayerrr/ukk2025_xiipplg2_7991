import { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import Navbar from ".././navbar";


function Task() {
  const [todos, setTodos] = useState([
   
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState('');
  const [editDate, setEditDate] = useState('');

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: 'Tugas baru',
      date: new Date().toLocaleDateString()
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openModal = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditId(todo.id);
    setEditTask(todo.task);
    setEditDate(todo.date);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditId(null);
    setEditTask('');
    setEditDate('');
  };

  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, task: editTask, date: editDate } : todo
      )
    );
    closeModal();
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className="my-4 text-center">ToDO List</h1>

      <Button className="mb-4" variant="primary" onClick={addTodo}>
        Tambah Tugas
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Tugas</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.task}</td>
              <td>{todo.date}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => openModal(todo.id)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tugas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Tugas</label>
            <input
              type="text"
              className="form-control"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              className="form-control"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Tutup
          </Button>
          <Button variant="primary" onClick={saveEdit}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}


export default Task;
