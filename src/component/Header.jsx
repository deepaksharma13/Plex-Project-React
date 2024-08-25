import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
   // State to keep track of which dropdown is open
   const [menuOpen, setMenuOpen] = useState({});

   // Function to handle mouse enter event
   const handleMouseEnter = (id) => {
     setMenuOpen((prevState) => ({
       ...prevState,
       [id]: true,
     }));
   };
 
   // Function to handle mouse leave event
   const handleMouseLeave = (id) => {
     setMenuOpen((prevState) => ({
       ...prevState,
       [id]: false,
     }));
   };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="shadow-md sticky-top  bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#">
              <img
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <NavDropdown
                    title="Car Tyres"
                    id={`offcanvasNavbarDropdown-expand-${expand}-car`}
                    onMouseEnter={() => handleMouseEnter('car')}
                    onMouseLeave={() => handleMouseLeave('car')}
                    show={menuOpen['car'] || false}
                    
                  >
                    <NavDropdown.Item href="#action3">Car</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Car action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Some Car here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Bike Tyres"
                    id={`offcanvasNavbarDropdown-expand-${expand}-bike`}
                    onMouseEnter={() => handleMouseEnter('bike')}
                    onMouseLeave={() => handleMouseLeave('bike')}
                    show={menuOpen['bike'] || false}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     Bike action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Some Bike  here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2"> Tyre Pressure</Nav.Link>
                  <NavDropdown
                    title="Commercial Tyres"
                    id={`offcanvasNavbarDropdown-expand-${expand}-Commercial`}
                    onMouseEnter={() => handleMouseEnter('Commercial')}
                    onMouseLeave={() => handleMouseLeave('Commercial')}
                    show={menuOpen['Commercial'] || false}
                  >
                    <NavDropdown.Item href="#action3">
                      All Commercial Tyres
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title=" Accessories"
                    id={`offcanvasNavbarDropdown-expand-${expand}-Accessories`}
                    onMouseEnter={() => handleMouseEnter('Accessories')}
                    onMouseLeave={() => handleMouseLeave('Accessories')}
                    show={menuOpen['Accessories'] || false}
                  >
                    <NavDropdown.Item href="#action3">
                 
                      Accessories
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Batteries
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="More"
                    id={`offcanvasNavbarDropdown-expand-${expand}-More`}
                    onMouseEnter={() => handleMouseEnter('More')}
                    onMouseLeave={() => handleMouseLeave('More')}
                    show={menuOpen['More'] || false}
                  >
                    <NavDropdown.Item href="#action3">
                      CashBack Offer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Are you a Tyre Dealer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Home Delivery
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Button
                  className="d-flex align-items-center logBtn"
                  variant="outline-success"
                >
                  {" "}
                  Login
                  <BsPerson />
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
