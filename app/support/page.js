
'use client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Support.css"

const Support = () => {
  // const form   = useRef();
  let sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_edfbs9h', 'template_jxbt2lf', e.target, 'T4Ea9iR6Xa0-x7XPz')
      .then((result) => {
        console.log(result.text);
        swal("Your message has been sent successfully");
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div className='supp' >
    
          <Form onSubmit={sendEmail} className='supForm'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fontLabel'>Your Name </Form.Label>
              <Form.Control className='boxSupp' type="text" placeholder="User" name='user_name' required />
              <Form.Label className='fontLabel'>Your Email</Form.Label>
              <Form.Control className='boxSupp' type="email" placeholder="name@example.com" name='user_email' required />
              <Form.Label className='fontLabel'>Your Issue</Form.Label>
              <Form.Control className='boxSupp' type="subject" placeholder="Subject" name='subject' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='fontLabel' >Please tell us whats wrong</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' placeholder="describe your problem" className='boxSupp' />
              <Button type='submit' className='button' variant="warning" >Send</Button>
            </Form.Group>
          </Form>
     


      </div >


    );
}
export default Support;