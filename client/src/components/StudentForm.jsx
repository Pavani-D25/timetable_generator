import React, { useState } from 'react';
import NavScrollExample from '../components/Navbar';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import './StudentForm.css'; // Ensure this CSS file contains the necessary styles

const StudentForm = () => {
  // State variables to store form inputs
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [department, setDepartment] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form data submission
    console.log({ registrationNumber, department });
    // Optionally reset form fields
    // setRegistrationNumber('');
    // setDepartment('');
  };

  return (
    <div>
      <NavScrollExample />

      <Container className="form-container pt-2">
        <h2 >Student Information Form</h2>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingRegistrationNumber" label="Registration Number" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Registration Number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingDepartment" label="Department" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </FloatingLabel>

          <Button className='btn1' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default StudentForm;
