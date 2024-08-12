// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 3030;

// app.use(cors());
// app.use(bodyParser.json());

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'college_database'
// });

// // Endpoint to submit teacher data
// app.post('/submit', (req, res) => {
//     const { facultyId, subject1, subject2, labSubject } = req.body;
//     pool.query(
//         'INSERT INTO teachers (faculty_id, subject1, subject2, lab_subject) VALUES (?, ?, ?, ?)',
//         [facultyId, subject1, subject2, labSubject],
//         (error, results) => {
//             if (error) {
//                 console.error('Error saving teacher data:', error);
//                 res.status(500).send('Error saving teacher data');
//             } else {
//                 res.status(200).json({ teacherId: results.insertId });
//             }
//         }
//     );
// });

// // Endpoint to generate timetable
// app.post('/generate-timetable', (req, res) => {
//     const { teacherId } = req.body;
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching teacher data:', error);
//             res.status(500).send('Error fetching teacher data');
//             return;
//         }

//         const teacher = results[0];
//         const subjects = [teacher.subject1, teacher.subject2, teacher.lab_subject].filter(Boolean);
//         const timetableEntries = [];
        
//         // Function to get random classroom ID
//         const getRandomClassroomId = () => Math.floor(Math.random() * 50) + 1; // Random classroom between 1 and 50

//         subjects.forEach((subject, index) => {
//             days.forEach((day, dayIndex) => {
//                 if (index + dayIndex < timeSlots.length) {
//                     timetableEntries.push({
//                         teacher_id: teacherId,
//                         subject_name: subject,
//                         day: day,
//                         time_slot: timeSlots[index + dayIndex],
//                         classroom_id: getRandomClassroomId() // Assign a random classroom
//                     });
//                 }
//             });
//         });

//         timetableEntries.forEach(entry => {
//             pool.query(
//                 'INSERT INTO timetables (teacher_id, subject_name, day, time_slot, classroom_id) VALUES (?, ?, ?, ?, ?)',
//                 [entry.teacher_id, entry.subject_name, entry.day, entry.time_slot, entry.classroom_id],
//                 (error) => {
//                     if (error) {
//                         console.error('Error inserting timetable entry:', error);
//                         res.status(500).send('Error inserting timetable entry');
//                         return;
//                     }
//                 }
//             );
//         });

//         res.status(200).send('Timetable generated successfully');
//     });
// });

// // Endpoint to get timetable for a specific teacher
// app.get('/timetable/:teacherId', (req, res) => {
//     const { teacherId } = req.params;
//     pool.query('SELECT * FROM timetables WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching timetable:', error);
//             res.status(500).send('Error fetching timetable');
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
































// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 3030;

// app.use(cors());
// app.use(bodyParser.json());

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Add your MySQL password if needed
//     database: 'college_database'
// });

// // Endpoint to submit teacher data
// app.post('/submit', (req, res) => {
//     const { facultyId, subject1, subject2, labSubject } = req.body;
//     pool.query(
//         'INSERT INTO teachers (faculty_id, subject1, subject2, lab_subject) VALUES (?, ?, ?, ?)',
//         [facultyId, subject1, subject2, labSubject],
//         (error, results) => {
//             if (error) {
//                 console.error('Error saving teacher data:', error);
//                 res.status(500).send('Error saving teacher data');
//             } else {
//                 res.status(200).json({ teacherId: results.insertId });
//             }
//         }
//     );
// });

// // Endpoint to generate timetable
// app.post('/generate-timetable', (req, res) => {
//     const { teacherId } = req.body;
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching teacher data:', error);
//             res.status(500).send('Error fetching teacher data');
//             return;
//         }

//         const teacher = results[0];
//         const subjects = [teacher.subject1, teacher.subject2, teacher.lab_subject].filter(Boolean);
//         const timetableEntries = [];

//         // Function to get random classroom ID
//         const getRandomClassroomId = () => Math.floor(Math.random() * 50) + 1; // Random classroom between 1 and 50

//         subjects.forEach((subject, index) => {
//             days.forEach((day, dayIndex) => {
//                 if (index * days.length + dayIndex < timeSlots.length) {
//                     timetableEntries.push({
//                         teacher_id: teacherId,
//                         subject_name: subject,
//                         day: day,
//                         time_slot: timeSlots[index * days.length + dayIndex],
//                         classroom_id: getRandomClassroomId() // Assign a random classroom
//                     });
//                 }
//             });
//         });

//         timetableEntries.forEach(entry => {
//             pool.query(
//                 'INSERT INTO timetables (teacher_id, subject_name, day, time_slot, classroom_id) VALUES (?, ?, ?, ?, ?)',
//                 [entry.teacher_id, entry.subject_name, entry.day, entry.time_slot, entry.classroom_id],
//                 (error) => {
//                     if (error) {
//                         console.error('Error inserting timetable entry:', error);
//                         res.status(500).send('Error inserting timetable entry');
//                         return;
//                     }
//                 }
//             );
//         });

//         res.status(200).send('Timetable generated successfully');
//     });
// });

// // Endpoint to get timetable for a specific teacher
// app.get('/timetable/:teacherId', (req, res) => {
//     const { teacherId } = req.params;
//     pool.query('SELECT * FROM timetables WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching timetable:', error);
//             res.status(500).send('Error fetching timetable');
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });














// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 3030;

// app.use(cors());
// app.use(bodyParser.json());

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Add your MySQL password if needed
//     database: 'college_database'
// });

// // Endpoint to submit teacher data
// app.post('/submit', (req, res) => {
//     const { facultyId, subject1, subject2, labSubject } = req.body;

//     // Validate input data
//     if (!facultyId || !subject1 || !subject2 || !labSubject) {
//         return res.status(400).send('All fields are required');
//     }

//     pool.query(
//         'INSERT INTO teachers (faculty_id, subject1, subject2, lab_subject) VALUES (?, ?, ?, ?)',
//         [facultyId, subject1, subject2, labSubject],
//         (error, results) => {
//             if (error) {
//                 console.error('Error saving teacher data:', error);
//                 return res.status(500).send('Error saving teacher data');
//             }
//             res.status(200).json({ teacherId: results.insertId });
//         }
//     );
// });

// // Endpoint to generate timetable
// app.post('/generate-timetable', (req, res) => {
//     const { teacherId } = req.body;

//     // Validate input data
//     if (!teacherId) {
//         return res.status(400).send('Teacher ID is required');
//     }

//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     pool.query('SELECT * FROM teachers WHERE faculty_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching teacher data:', error);
//             return res.status(500).send('Error fetching teacher data');
//         }

//         if (results.length === 0) {
//             return res.status(404).send('Teacher not found');
//         }

//         const teacher = results[0];
//         const subjects = [teacher.subject1, teacher.subject2, teacher.lab_subject].filter(Boolean);
//         const timetableEntries = [];

//         // Function to get random classroom ID
//         const getRandomClassroomId = () => Math.floor(Math.random() * 50) + 1; // Random classroom between 1 and 50

//         subjects.forEach((subject, index) => {
//             days.forEach((day, dayIndex) => {
//                 if (index * days.length + dayIndex < timeSlots.length) {
//                     timetableEntries.push({
//                         teacher_id: teacherId,
//                         subject_name: subject,
//                         day: day,
//                         time_slot: timeSlots[index * days.length + dayIndex],
//                         classroom_id: getRandomClassroomId() // Assign a random classroom
//                     });
//                 }
//             });
//         });

//         timetableEntries.forEach(entry => {
//             pool.query(
//                 'INSERT INTO timetables (teacher_id, subject_name, day, time_slot, classroom_id) VALUES (?, ?, ?, ?, ?)',
//                 [entry.teacher_id, entry.subject_name, entry.day, entry.time_slot, entry.classroom_id],
//                 (error) => {
//                     if (error) {
//                         console.error('Error inserting timetable entry:', error);
//                         return res.status(500).send('Error inserting timetable entry');
//                     }
//                 }
//             );
//         });

//         res.status(200).send('Timetable generated successfully');
//     });
// });

// // Endpoint to get timetable for a specific teacher
// app.get('/timetable/:teacherId', (req, res) => {
//     const { teacherId } = req.params;

//     pool.query('SELECT * FROM timetables WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error('Error fetching timetable:', error);
//             return res.status(500).send('Error fetching timetable');
//         }
//         res.status(200).json(results);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });











const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Add your MySQL password if needed
    database: 'college_database'
});

// Endpoint to submit teacher data
app.post('/submit', (req, res) => {
    const { faculty_id, subject1, subject2, lab_subject } = req.body;
    pool.query(
        'INSERT INTO teachers (faculty_id, subject1, subject2, lab_subject) VALUES (?, ?, ?, ?)',
        [faculty_id, subject1, subject2, lab_subject],
        (error, results) => {
            if (error) {
                console.error('Error saving teacher data:', error);
                res.status(500).send('Error saving teacher data');
            } else {
                res.status(200).json({ teacherId: results.insertId });
            }
        }
    );
});

// Endpoint to generate timetable
app.post('/generate-timetable', (req, res) => {
    const { teacherId } = req.body;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeSlots = [
        '8:45 - 9:35 AM',
        '9:35 - 10:25 AM',
        '10:40 - 11:30 AM',
        '11:30 AM - 12:20 PM',
        '2:20 - 3:10 PM',
        '3:25 - 4:40 PM'
    ];

    pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacherId], (error, results) => {
        if (error) {
            console.error('Error fetching teacher data:', error);
            res.status(500).send('Error fetching teacher data');
            return;
        }

        if (results.length === 0) {
            return res.status(404).send('Teacher not found');
        }

        const teacher = results[0];
        const subjects = [teacher.subject1, teacher.subject2, teacher.lab_subject].filter(Boolean);
        const timetableEntries = [];

        // Function to get random classroom ID
        const getRandomClassroomId = () => Math.floor(Math.random() * 50) + 1; // Random classroom between 1 and 50

        subjects.forEach((subject, index) => {
            days.forEach((day, dayIndex) => {
                if (index * days.length + dayIndex < timeSlots.length) {
                    timetableEntries.push({
                        teacher_id: teacherId,
                        subject_name: subject,
                        day: day,
                        time_slot: timeSlots[index * days.length + dayIndex],
                        classroom_id: getRandomClassroomId() // Assign a random classroom
                    });
                }
            });
        });

        timetableEntries.forEach(entry => {
            pool.query(
                'INSERT INTO timetables (teacher_id, subject_name, day, time_slot, classroom_id) VALUES (?, ?, ?, ?, ?)',
                [entry.teacher_id, entry.subject_name, entry.day, entry.time_slot, entry.classroom_id],
                (error) => {
                    if (error) {
                        console.error('Error inserting timetable entry:', error);
                        res.status(500).send('Error inserting timetable entry');
                        return;
                    }
                }
            );
        });

        res.status(200).send('Timetable generated successfully');
    });
});

// Endpoint to get timetable for a specific teacher
app.get('/timetable/:teacherId', (req, res) => {
    const { teacherId } = req.params;
    pool.query('SELECT * FROM timetables WHERE teacher_id = ?', [teacherId], (error, results) => {
        if (error) {
            console.error('Error fetching timetable:', error);
            res.status(500).send('Error fetching timetable');
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
