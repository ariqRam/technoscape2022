import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">[LOGO]</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              defaultActiveKey="/"
              activeKey={window.location.pathname}
              className="me-auto"
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
