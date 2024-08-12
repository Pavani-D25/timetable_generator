import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Sidebar.css'; // Custom CSS for Sidebar

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Functions to handle navigation
  const goToHome = () => navigate('/');
  const goToTeacherForm = () => navigate('/teacher');
  const goToStudentForm = () => navigate('/student');

  return (
    <div className="sidebar-content">
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
        className="w-100"
      >
        <Button
          className="link text-white fs-6 p-4 custom-font-class"
          onClick={goToHome} // Add onClick handler
        >
          Home
        </Button>
        <Button
          className="link text-white fs-6 p-4"
          onClick={goToTeacherForm} // Add onClick handler
        >
          Teacher
        </Button>
        <Button
          className="link text-white fs-6 p-4"
          onClick={goToStudentForm} // Add onClick handler
        >
          Student
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Sidebar;
