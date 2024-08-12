import React from 'react';
import { useParams } from 'react-router-dom';
import NavScrollExample from '../components/Navbar';
import TimetableDisplay from '../components/TimetableDisplay';
import './Timetable.css'; // Ensure the correct path to your CSS file


const Timetable = () => {
    const { teacherId } = useParams();

    return (
        <div>
            <NavScrollExample />
            <h1 className='heading'>Timetable</h1>
            <TimetableDisplay teacherId={teacherId} />
        </div>
    );
};

export default Timetable;
