import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MyPosts = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [jobs, setJobs] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [currentJob, setCurrentJob] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/api/job/myPosts/${user?._id.toString()}`);
      setJobs(res.data.jobsToGet);
      setHasChanged(false);
    }
    fetchData();
  }, [user, hasChanged]);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (job) => {
    setCurrentJob(job);
    setShowEdit(true);
  };

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (job) => {
    setCurrentJob(job);
    setShowDelete(true);
  };

  const handleChange = (e) => {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  };

  const handleEdit = async (job) => {
    await axios.put(`/api/job/editJob/${job._id.toString()}`, job);
    setHasChanged(true);
    setShowEdit(false);
  };

  const handleDelete = async (job) => {
    await axios.delete(`/api/job/deleteJob/${job._id.toString()}`);
    setHasChanged(true);
    setShowDelete(false);
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Category</th>
            <th>Contract</th>
            <th>Experience</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job?.title}</td>
                <td>{job?.location}</td>
                <td>{job?.salary}</td>
                <td>{job?.category}</td>
                <td>{job?.type}</td>
                <td>{job?.careerLevel}</td>
                <td>
                  {job?.description <= 60
                    ? job?.description
                    : job?.description.slice(0, 60) + "..."}
                </td>
                <td>
                  {" "}
                  <Button onClick={() => handleShowEdit(job)}>
                    {" "}
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  {"  "}
                  <br />
                  <Button onClick={() => handleShowDelete(job)}>
                    {" "}
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            handleEdit(currentJob);
          }}
        >
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title </Form.Label>
              <Form.Control
                name="title"
                placeholder="Enter title"
                onChange={handleChange}
                defaultValue={currentJob?.title}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                placeholder="Enter location"
                onChange={handleChange}
                defaultValue={currentJob?.location}
              />
              <Form.Group>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  name="salary"
                  placeholder="Enter salary"
                  onChange={handleChange}
                  defaultValue={currentJob?.salary}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                placeholder="Enter job category"
                onChange={handleChange}
                defaultValue={currentJob?.category}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contract</Form.Label>
              <Form.Control
                name="type"
                placeholder="Enter job type"
                onChange={handleChange}
                defaultValue={currentJob?.type}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Experience</Form.Label>
              <Form.Control
                name="careerLevel"
                placeholder="Enter career level"
                onChange={handleChange}
                defaultValue={currentJob?.careerLevel}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                row="8"
                type="job description"
                placeholder="Job Description"
                defaultValue={currentJob?.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Edit user
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You're about to delete this job, this action is irreversible. Are you
          sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(currentJob)}>
            Yes, Delete Job
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyPosts;
