"use client"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from 'sweetalert';
import moment from "moment";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function EditBooking({ bookInfo }) {

    const [formData, setFormData] = useState({
        "description": bookInfo.description,
        "day": bookInfo.day,
        "time": bookInfo.time,
        "Craftsman": bookInfo.craftsman.id,

    });



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const hours = [...Array(12).keys()].map((x) => x + 1);
    const [selectedHour, setSelectedHour] = useState(null);
    const [selectedAmPm, setSelectedAmPm] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    const handleDescriptionChange = (event) => {
        setFormData({ ...formData, "description": event.target.value });
    }
    const handleDateChange = (event) => {
        const selected = new Date(event.target.value);
        const currentDate = new Date();
        const ss = selected.toISOString().slice(0, 10);

        if (selected >= currentDate) {
            setSelectedDate(ss);
            setFormData({ ...formData, "day": ss });
        } else {
            swal("Please select a date in the present or future");
        }
    };
    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const handleAmPmChange = (event) => {
        setSelectedAmPm(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            "day": moment(selectedDate).format("YYYY-MM-DD"),
            "time": `${selectedHour} ${selectedAmPm}`
        });
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/booking/${bookInfo.id}/`, formData);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async (e) => {
        handleClose()
        e.preventDefault();
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/booking/${bookInfo.id}/`, formData);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <>
        
            <Button className="editb" variant="primary" onClick={handleShow}>
                Edit
                
            </Button>

            <Modal show={show} onHide={handleClose}>
             <div className="modalbooking">
                <Modal.Header className="modalheader" closeButton>
                    <Modal.Title>Edit Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="formbooking" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="textfields" as="textarea" rows={3} onChange={handleDescriptionChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="datepicker">
                            <Form.Label>Select a date:</Form.Label>
                            <Form.Control
                                type="date"
                                className="textfields"
                                onChange={handleDateChange}
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="timepicker">
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
                        </Form.Group>
                        <Button className="btnbooking" variant="primary" type="submit" onClick={handleClose}>
                            Submit
                        </Button>
                        <Button className="editbtn2" variant="danger" onClick={handleDelete}>
                            Delete 
                        </Button>
                    </Form>

                </Modal.Body>
                </div>
            </Modal>
        </>
    );
}

export default EditBooking