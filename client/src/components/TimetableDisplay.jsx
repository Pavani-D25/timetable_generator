// import React, { useEffect, useState } from 'react';
// import './TimetableDisplay.css'; // Import the CSS file

// const TimetableDisplay = ({ teacherId }) => {
//     const [timetable, setTimetable] = useState(null);

//     useEffect(() => {
//         const fetchTimetable = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3030/timetable/${teacherId}`);
//                 const data = await response.json();
//                 setTimetable(data);
//             } catch (error) {
//                 console.error('Error fetching timetable:', error);
//                 setTimetable([]);
//             }
//         };

//         fetchTimetable();
//     }, [teacherId]);

//     if (!timetable) return <p>Loading timetable...</p>;

//     return (
//         <div className="timetable-container">
//             <h2>Timetable for Teacher ID: {teacherId}</h2>
//             <table className="timetable-table">
//                 <thead>
//                     <tr>
//                         <th>Day</th>
//                         <th>Time Slot</th>
//                         <th>Subject</th>
//                         <th>Classroom</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {timetable.map((entry, index) => (
//                         <tr key={index}>
//                             <td>{entry.day}</td>
//                             <td>{entry.time_slot}</td>
//                             <td>{entry.subject_name}</td>
//                             <td>{entry.classroom_id}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TimetableDisplay;





















import React, { useEffect, useState } from 'react';
import './TimetableDisplay.css'; // Import the CSS file

const TimetableDisplay = ({ teacherId }) => {
    const [timetable, setTimetable] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTimetable = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3030/timetable/${teacherId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTimetable(data);
            } catch (error) {
                console.error('Error fetching timetable:', error);
                setError('Error fetching timetable data');
                setTimetable([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTimetable();
    }, [teacherId]);

    if (loading) return <p>Loading timetable...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="timetable-container">
            <h2>Timetable for Teacher ID: {teacherId}</h2>
            <table className="timetable-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time Slot</th>
                        <th>Subject</th>
                        <th>Classroom</th>
                    </tr>
                </thead>
                <tbody>
                    {timetable.length > 0 ? (
                        timetable.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.day}</td>
                                <td>{entry.time_slot}</td>
                                <td>{entry.subject_name}</td>
                                <td>{entry.classroom_id}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No timetable data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TimetableDisplay;
