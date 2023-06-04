import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Accepted from './Components/Accepted';
import Undecided from './Components/Undecided';
import NewPiece from './Components/NewPiece';
import Legend from './Components/Legend';

export default class App extends React.Component {
render(){
  return (
    <div id="main">
      <div id="primary">
        <Router>
          <Navbar id="top" variant="dark">
            <Container>
              <Nav className="me-auto justify-content-evenly">
                <LinkContainer to="/A"><Nav.Link>Accepted-Pieces</Nav.Link></LinkContainer>
                <LinkContainer to="/U"><Nav.Link>Undecided-Pieces</Nav.Link></LinkContainer>
                <LinkContainer to="/N"><Nav.Link>Create-A-New-Piece</Nav.Link></LinkContainer>
              </Nav>
            </Container>
            <Legend/>
          </Navbar>
          <div id="middle">
            <Switch>
              <Route path="/A"><Accepted/></Route>
              <Route path="/U"><Undecided/></Route>
              <Route path="/N"><NewPiece/></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
}
/*
-/  Using an online API of your choice (or if no API can be found, using an array for in-memory storage is okay as well), create a React project of your choice.
    Project must meet the following criteria:
-/      Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
-/      Contain at least 10 components
-/      Allow for all CRUD operations
*/
