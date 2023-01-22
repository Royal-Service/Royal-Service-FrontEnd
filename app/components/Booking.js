import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Booking() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateChange = event => {
    const selected = new Date(event.target.value);
    const currentDate = new Date();

    if (selected >= currentDate) {
      setSelectedDate(selected);
    } else {
      alert('Please select a date in the present or future');
    }
  };

  const handleTimeChange = event => {
    const selected = new Date(`1970-01-01T${event.target.value}`);
    const currentTime = new Date();

    if (selected >= currentTime) {
      setSelectedTime(selected);
    } else {
      alert('Please select a time in the future');
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Now!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="datepicker">

              <Form.Label>Select a date:</Form.Label>
              <Form.Control type="date" onChange={handleDateChange} min={new Date().toISOString().split("T")[0]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="timepicker">
              <Form.Label>Select a time:</Form.Label>
              <Form.Control type="time" onChange={handleTimeChange} min={new Date().toTimeString().split(" ")[0]} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

