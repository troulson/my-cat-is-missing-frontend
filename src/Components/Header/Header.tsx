import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {

    return (
      <Navbar fixed='top' bg='dark' variant='dark'>
          <Container>
              <Navbar.Brand href="/">
                  My Cat Is Missing
              </Navbar.Brand>
              <Nav>
                  <Nav.Link href="/create" className="justify-content-end">
                      Create Report
                  </Nav.Link>
              </Nav>
          </Container>
      </Navbar>
    );
}

export default Header;