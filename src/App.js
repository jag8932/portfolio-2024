import './App.css';
import { ProjectGrid } from './components/projectGrid';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Hero } from './components/hero';
import { AboutMe } from './components/aboutMe';
import { ResumeLink } from './components/resumeLink';

function App() {

  return (
    <div className="App">
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><strong>Jacob Goodwillie</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="www.linkedin.com/in/jacob-goodwillie-92697b176"><img className="nav-img" src="linkedin.png"></img></Nav.Link>
              <Nav.Link href="https://github.com/jag8932"><img className="nav-img" src="github.png"></img></Nav.Link>
              <ResumeLink/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="home-aboutme bg-dark">
        <AboutMe />
      </section>
      <section className="home-projects bg-dark">
        <ProjectGrid />
      </section>
    </div>
  );
}

export default App;
