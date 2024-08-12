// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [facultyId, setFacultyId] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [labSubject, setLabSubject] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3030/submit', { facultyId, subject1, subject2, labSubject });
//             const { teacherId } = response.data;
//             // Call the endpoint to generate the timetable
//             await axios.post('http://localhost:3030/generate-timetable', { teacherId });
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             alert('Error generating timetable');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={facultyId}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={labSubject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [facultyId, setFacultyId] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [labSubject, setLabSubject] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3030/submit', { facultyId, subject1, subject2, labSubject });
//             const { teacherId } = response.data;
//             // Call the endpoint to generate the timetable and get the timetable data
//             const timetableResponse = await axios.post('http://localhost:3030/generate-timetable', { teacherId });
//             const { timetable } = timetableResponse.data;
//             // Store timetable data in localStorage (or handle as needed)
//             localStorage.setItem('timetable', JSON.stringify(timetable));
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             alert('Error generating timetable');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={facultyId}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={labSubject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;



















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavScrollExample from '../components/Navbar';
import { Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './TeacherForm.css';

const TeacherForm = () => {
    const [facultyId, setFacultyId] = useState('');
    const [subject1, setSubject1] = useState('');
    const [subject2, setSubject2] = useState('');
    const [labSubject, setLabSubject] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear any previous errors
        try {
            // Send data to the backend to save teacher information
            const response = await axios.post('http://localhost:3030/submit', { faculty_id: facultyId, subject1, subject2, lab_subject: labSubject });
            const { teacherId } = response.data;

            // Generate timetable for the teacher
            await axios.post('http://localhost:3030/generate-timetable', { teacherId });

            // Redirect to the timetable page
            navigate(`/timetable/${teacherId}`);
        } catch (error) {
            console.error('Error generating timetable', error);
            setError('There was an error generating the timetable. Please try again.');
        }
    };

    return (
        <div>
            <NavScrollExample />
            <Container className="form-container pt-2">
                <h2>Teacher Information Form</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Faculty ID"
                            value={facultyId}
                            onChange={(e) => setFacultyId(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Subject 1"
                            value={subject1}
                            onChange={(e) => setSubject1(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Subject 2"
                            value={subject2}
                            onChange={(e) => setSubject2(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Lab Subject"
                            value={labSubject}
                            onChange={(e) => setLabSubject(e.target.value)}
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

export default TeacherForm;
