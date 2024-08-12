// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';

// function NavScrollExample() {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);

//   const handleShow = () => setShowOffcanvas(true);
//   const handleClose = () => setShowOffcanvas(false);

//   return (
//     <>
//       <Navbar expand="lg" className="bg-dark">
//         <Container fluid>
//           <Navbar.Brand href="#" className="text-white pr-5">
//             <div style={{ lineHeight: '1.2' }}>
//               <strong>BIT</strong><br />
//               Scheduler
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow}>
//             <i className="bi bi-list text-white"></i> {/* Menu icon for smaller screens */}
//           </Navbar.Toggle>
//           <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1" className="pr-4 text-white">Home</Nav.Link>
//               <Nav.Link href="#action2" className="pr-4 text-white">Link</Nav.Link>
//               {/* Uncomment and use NavDropdown if needed
//               <NavDropdown title="Link" id="navbarScrollingDropdown" className="text-white">
//                 <NavDropdown.Item href="#action3" className="text-dark">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4" className="text-dark">Another action</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5" className="text-dark">Something else here</NavDropdown.Item>
//               </NavDropdown> */}
//               <Nav.Link href="#" disabled className="pr-4 text-white">Link</Nav.Link>
//             </Nav>
//             <Form className="d-none d-lg-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success" className="text-white">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Side Menu */}
//       <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start" className="bg-dark text-white">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Form className="d-flex mb-3">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//           <Nav className="flex-column">
//             <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
//             <Nav.Link href="#action2" className="text-white">Link</Nav.Link>
//             {/* Uncomment and use NavDropdown if needed
//             <NavDropdown title="Link" id="offcanvasNavbarDropdown" className="text-white">
//               <NavDropdown.Item href="#action3" className="text-dark">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4" className="text-dark">Another action</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5" className="text-dark">Something else here</NavDropdown.Item>
//             </NavDropdown> */}
//             <Nav.Link href="#" disabled className="text-white">Link</Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default NavScrollExample;













import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Custom CSS for additional styling if needed
import Sidebar from "./Sidebar";

function NavScrollExample() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white ps-3  ">
            <div style={{ lineHeight: "1.2" }}>
              <span style={{ fontSize: "2.0rem" }}>BIT </span>
              <span style={{ fontSize: "1.5rem" }}>Scheduler</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleSidebarToggle}
          >
            <i className="bi bi-list text-white"></i>{" "}
            {/* Menu icon for small screens */}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex d-none d-lg-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar for large screens */}
      <div className="sidebar-large d-none d-lg-block">
        <Sidebar />
      </div>

      {/* Offcanvas for small screens */}
      <Offcanvas
        show={showSidebar}
        onHide={handleSidebarToggle}
        placement="start"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-flex mb-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search_btn" variant="outline-success">
              Search
            </Button>
          </Form>
          <Sidebar /> {/* Include sidebar content in the offcanvas */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavScrollExample;
