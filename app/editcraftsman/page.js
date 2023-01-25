"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../contexts/Auth";
import axios from "axios";
import swal from 'sweetalert';
function Editcraftsman({userData}) {
  const { userInfo, craftsmanID } = useAuth();
  const [formData, setFormData] = useState({
    "first_name": userData.first_name,
    "last_name": userData.last_name,
    "phone_number":  userData.phone_number,
    "location": userData.location,
    "price": userData.price
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.put(`http://127.0.0.1:8000/Craftsmans/profile/edit/${craftsmanID}`, formData);
        console.log(res);
        swal("Done");
    } catch (err) {
        console.log(err);
    }
};

  return (
    <>


      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="first name"
                autoFocus
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Last name"
                autoFocus
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone_number"
                  placeholder="phone_number"
                  // min="10"
                  // max="10"
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  autoFocus
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                
         
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>price</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      placeholder="price"
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      autoFocus
                      
                    />
                  </Form.Group>
                </Form.Group>
              </Form.Group>
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
            <Button type="submit"variant="primary" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editcraftsman;
