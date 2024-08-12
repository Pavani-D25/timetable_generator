

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import TeacherForm from './components/TeacherForm';
// import StudentForm from './components/StudentForm';
// import Timetable from './components/Timetable';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Assuming this contains your global CSS

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/teacher" element={<TeacherForm />} />
//           <Route path="/student" element={<StudentForm />} />
//           <Route path="/timetable/:teacherId" element={<Timetable />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;











import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import TeacherForm from './components/TeacherForm';
import StudentForm from './components/StudentForm';
import Timetable from './components/Timetable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherForm />} />
          <Route path="/student" element={<StudentForm />} />
          <Route path="/timetable/:teacherId" element={<Timetable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
