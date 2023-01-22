import React, { useState } from "react";
import { useAuth } from "../contexts/Auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function Modal2({userData}) {
  const { userInfo,custmerID } = useAuth();
  const [show, setShow] = useState(false);
  
  const userInfoURL = "http://127.0.0.1:8000/profile/";
  
  const [formData, setFormData] = useState({
    "first_name": userData.first_name,
    "last_name": userData.last_name,
    "phone_number": userData.phone_number,
    "location": userData.location,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(userInfoURL + custmerID + "/", formData);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Change your information
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleFormChange}
                placeholder="change your first name"
                autoFocus
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleFormChange}
                placeholder="change your last name"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="change your email"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleFormChange}
                placeholder="change your phone number"
                autoFocus
              />
            </Form.Group>
            <Form.Select aria-label="location" onChange={(e) => setFormData({ ...formData, location: e.target.value })}>
              <option value="">Select Location</option>
              <option value="AMMAN">Amman</option>
              <option value="ZARQA">Zarqa</option>
              <option value="IRBID">Irbid</option>
              <option value="AQAPA">Aqaba</option>
              <option value="MAFRAQ">Mafraq</option>
              <option value="MADABA">Madaba</option>
              <option value="BALQA">As-Salt</option>
              <option value="JERASH">Jerash</option>
              <option value="MAAN">Ma'an</option>
              <option value="KARAK">Karak</option>
              <option value="TAFILAH">Tafilah</option>
              <option value="AJLOUN">Ajloun</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
