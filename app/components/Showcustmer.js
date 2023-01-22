"use client"
import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Showcustmer({datac}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8000/profile/${datac.custmer}/`);
      
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Show details
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>you have reservation in {datac.day} at {datac.time}</h3>
            <h3>{data.first_name+" "+data.last_name}</h3>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Showcustmer