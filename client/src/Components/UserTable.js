import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UserTable = () => {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/user/users/");
      setUsers(res.data.listUsers);
      setHasChanged(false);
    }
    fetchData();
  }, [hasChanged]);

  const handleClose = () => setShow(false);
  const handleShow = (userId) => {
    setSelectedUser(userId);
    setShow(true);
  };
  const handleDelete = async (userId) => {
    await axios.delete(`/api/user/deleteUser/${userId}`);
    setHasChanged(true);
    setShow(false);
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>
                {" "}
                <Button onClick={() => handleShow(user?._id)}>
                  {" "}
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ATTENTION !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You're about to delete this user, this action is irreversible. Are you
          sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(selectedUser)}>
            Yes, Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserTable;
