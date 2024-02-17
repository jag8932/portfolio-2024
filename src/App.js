import './App.css';
import { ProjectGrid } from './components/projectGrid';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Hero } from './components/hero';
import { AboutMe } from './components/aboutMe';


function App() {

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <Navbar.Brand href="#home">Jacob Goodwillie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="www.linkedin.com/in/jacob-goodwillie-92697b176"><img className="nav-img" src="linkedin.png"></img></Nav.Link>
            <Nav.Link href="https://github.com/jag8932"><img className="nav-img" src="github.png"></img></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <section className="home-hero">
        <Hero />
      </section>
      <section className="home-aboutme">
        <AboutMe />
      </section>
      <section className="home-projects">
        <ProjectGrid />
      </section>
    </div>
  );
}

export default App;
