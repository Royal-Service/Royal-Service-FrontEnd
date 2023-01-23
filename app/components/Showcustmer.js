"use client"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Showcustmer({ datac }) {
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
        // size='sm'
      >




        <Modal.Body>
          <table className="wrapper all-font-sans" width="100%" height="100%" cellPadding="0" cellSpacing="0"  >
            <tbody>
              <tr>
                <td align="center" style={{ padding: "0.5rem 0 0 0" }} width="100%">
                  <table className="sm-w-full" width="80%" cellPadding="0" cellSpacing="0"  >
                    <tbody>
                      <tr>
                        <td align="left" className="sm-p-20 sm-dui17-b-t" style={{ borderRadius: 2, position: 'relative', verticalAlign: 'top', zIndex: 50 }} bgcolor="#ffffff" valign="top">
                          <table width="100%" cellPadding="0" cellSpacing="0"  >
                            <tr>
                              <td width="80%">
                                <h1 className="sm-text-lg all-font-roboto" style={{ fontWeight: 700, lineHeight: '100%', margin: 0, marginBottom: "2rem", fontSize: 24 }}>
                                  Reservation Details
                                </h1>
                              </td>
                            </tr>
                          </table>


                          <table className="sm-leading-32" style={{ lineHeight: '28px', fontSize: 14 }} width="100%" cellPadding="0" cellSpacing="0"  >
                            <tbody>
                              <tr>
                                <td className="sm-inline-block" style={{ color: '#718096' }} width="50%">Name</td>
                                <td className="sm-inline-block" style={{ fontWeight: 600, textAlign: 'right' }} width="50%" align="right">{data.first_name + " " + data.last_name}</td>
                              </tr>
                              <tr>
                                <td className="sm-inline-block" style={{ color: '#718096' }} width="50%">Phone</td>
                                <td className="sm-inline-block" style={{ fontWeight: 600, textAlign: 'right' }} width="50%" align="right">{data.phone_number}</td>
                              </tr>
                              <tr>
                                <td className="sm-w-1-4 sm-inline-block" style={{ color: '#718096' }} width="50%">Location</td>
                                <td className="sm-w-3-4 sm-inline-block" style={{ fontWeight: 600, textAlign: 'right' }} width="50%" align="right"> {data.location}</td>
                              </tr>
                            </tbody>
                          </table>


                          <table width="100%" cellPadding="0" cellSpacing="0"  >
                            <tbody>
                              <tr>
                                <td style={{ paddingTop: 24, paddingBottom: 24 }}>
                                  <div style={{ backgroundColor: '#edf2f7', height: 2, lineHeight: 2 }}>&zwnj;</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style={{ fontSize: 14 }} width="100%" cellPadding="0" cellSpacing="0"  >
                            <tbody>
                              <tr>
                                <td className="sm-w-full sm-inline-block sm-text-center" width="40%">
                                  <p className="all-font-roboto" style={{ margin: 0, marginBottom: 4, color: '#a0aec0', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Date</p>
                                  <p className="all-font-roboto" style={{ fontWeight: 600, margin: 0, color: '#000000' }}>{datac.day}</p>
                                </td>
                                <td className="sm-w-full sm-inline-block sm-py-12" style={{ fontFamily: 'Menlo, Consolas, monospace', fontWeight: 600, textAlign: 'center', color: '#cbd5e0', fontSize: 18, letterSpacing: -1 }} width="20%" align="center">&gt;&gt;&gt;</td>
                                <td className="sm-w-full sm-inline-block sm-text-center" style={{ textAlign: 'right' }} width="40%" align="right">
                                  <p className="all-font-roboto" style={{ margin: 0, marginBottom: 4, color: '#a0aec0', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>at</p>
                                  <p className="all-font-roboto" style={{ fontWeight: 600, margin: 0, color: '#000000' }}>{datac.time}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>


                          <table width="100%" cellPadding="0" cellSpacing="0"  >
                            <tbody>
                              <tr>
                                <td style={{ paddingTop: 24, paddingBottom: 24 }}>
                                  <div style={{ backgroundColor: '#edf2f7', height: 2, lineHeight: 2 }}>&zwnj;</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style={{ lineHeight: '28px', fontSize: 14 }} width="100%" cellPadding="0" cellSpacing="0"  >
                            <tbody>
                              <tr>
                                <td style={{ color: '#718096' }} width="100%">Description</td>
                              </tr>
                              <tr>
                                <td style={{ fontWeight: 600, width: "100%", maxWidth:'100%', whiteSpace:'pre-line' }}  >{datac.description}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

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

export default Showcustmer