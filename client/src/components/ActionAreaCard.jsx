import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ActionAreaCard.css'; 
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard() {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate('/teacher');
  };

  const handleStudentClick = () => {
    navigate('/student');
  };

  return (
    <div className="card-container">
      <Card className="card">
        <CardActionArea onClick={handleTeacherClick}>
          <CardMedia
            component="img"
            className="card-img"
            image="/images/teacher.jpg"
            alt="Teacher"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              Teacher
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button type="submit" className="action_btn" onClick={handleTeacherClick}>Get Timetable</Button>
      </Card>

      <Card className="card">
        <CardActionArea className='area' onClick={handleStudentClick}>
          <CardMedia
            component="img"
            className="card-img"
            image="/images/student.png"
            alt="Student"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              Student
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className='area'>
        <Button type="submit" className="action_btn" onClick={handleStudentClick} >Get Timetable</Button>
        </div>
      </Card>
    </div>
  );
}
