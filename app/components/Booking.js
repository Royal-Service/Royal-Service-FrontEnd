import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../contexts/Auth";
import moment from "moment";
export default function Booking({id}) {
  const { tokens } = useAuth();
  const [formData, setFormData] = useState({
    "day": '',
    "time": '',
    "description": '',
    "Craftsman": id,
  });

  const [show, setShow] = useState(false);

  const hours = [...Array(12).keys()].map((x) => x + 1);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedAmPm, setSelectedAmPm] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleAmPmChange = (event) => {
    setSelectedAmPm(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    const currentDate = new Date();
    const ss = selected.toISOString().slice(0, 10);
    
    if (selected >= currentDate) {
      setSelectedDate(ss);
      setFormData({...formData, "day":ss});
    } else {
      alert("Please select a date in the present or future");
    }
  };

  const handleDescriptionChange = (event) => {
    setFormData({...formData, "description":event.target.value});
  }

  const bookURl = "http://127.0.0.1:8000/api/booking/submit/"
  const handleSubmit = (event) => {
      event.preventDefault();
      // update the time field in formData with the selected hour and AM/PM value
      setFormData({
        ...formData,
        "day": moment(selectedDate).format("YYYY-MM-DD"),
        "time": `${selectedHour} ${selectedAmPm}`
      });
      
      fetch(bookURl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,"Authorization" : `Bearer ${tokens.access}`},
        body: JSON.stringify(formData),
  
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert("done")
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("error")
        });
    };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Now!
      </Button>

      <Modal className="moddd" show={show} onHide={handleClose}>
        <div className="modalbooking">
        <Modal.Header className="modalheader" closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="formbooking" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control className="textfields" as="textarea" rows={3} onChange={handleDescriptionChange}/>
            </Form.Group>
            <Form.Group  className="mb-3" controlId="datepicker">
              <Form.Label>Select a date:</Form.Label>
              <Form.Control
                className="textfields"
                type="date"
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </Form.Group>
            <Form.Group  className="mb-3" controlId="timepicker">
              <Form.Label>Select a time:</Form.Label>
              <Form.Control className="textfields" as="select" onChange={handleHourChange}>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </Form.Control>
              <Form.Check
                type="radio"
                label="AM"
                name="amPm"
                id="am"
                value="AM"
                checked={selectedAmPm === "AM"}
                onChange={handleAmPmChange}
              />
              <Form.Check
                type="radio"
                label="PM"
                name="amPm"
                id="pm"
                value="PM"
                checked={selectedAmPm === "PM"}
                onChange={handleAmPmChange}
              />
            </Form.Group >
            <Button className="btnbooking" variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
          <Button className="btnclosebooking" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
