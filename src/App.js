import './App.css';
import React from 'react';
import Menu from './Components/MenuComponent'
import {
  Container,
  Navbar,
  Row
} from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Ristorante con fusion</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Body */}
      <Container>
        <Row>
          <Menu />
        </Row>
      </Container>
    </div>
  );
}

export default App;
