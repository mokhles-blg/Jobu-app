import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReceivedApplications = () => {
  const [receivedApps, setReceivedApps] = useState([]);
  const [showResume, setShowResume] = useState(false);
  const [showCover, setShowCover] = useState(false);
  const [currentResume, setCurrentResume] = useState(false);
  const [currentCover, setCurrentCover] = useState(false);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/application/receivedApps", {
        params: {
          employerId: user?._id.toString(),
        },
      });
      setReceivedApps(res.data.result);
    }
    fetchData();
  }, []);
  const handleCloseResume = () => setShowResume(false);
  const handleShowResume = (resume) => {
    setCurrentResume(resume);
    setShowResume(true);
  };

  const handleCloseCover = () => setShowCover(false);
  const handleShowCover = (cover) => {
    setCurrentCover(cover);
    setShowCover(true);
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Resume</th>
            <th>Cover Letter</th>
          </tr>
        </thead>
        <tbody>
          {receivedApps.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element?.jobTitle}</td>
              <td>{element?.name}</td>
              <td>{element?.email}</td>
              <td>{element?.phone}</td>
              <td>{element?.address}</td>
              <td>
                {" "}
                <Button onClick={() => handleShowResume(element?.resume)}>
                  {" "}
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </td>
              <td>
                {" "}
                <Button onClick={() => handleShowCover(element?.coverLetter)}>
                  {" "}
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showResume} onHide={handleCloseResume}>
        <Modal.Header closeButton>
          <Modal.Title>RESUME</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="resume"
            src={currentResume}
            height="600px"
            width="400px"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseResume}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCover} onHide={handleCloseCover}>
        <Modal.Header closeButton>
          <Modal.Title>COVER LETTER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{currentCover}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCover}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReceivedApplications;
