import React from 'react';
import './App.css';
import Search from './search';
import CardList from './cardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

// const Card = () =>{
//   return React.createElement("div",{},[
//     React.createElement("h2", {}, "nomePokemon")
//   ])
// }

function App() {
  return (
    <div className="App">
     <Container>
       <Row>
          <Col><h1>Pokédex</h1></Col>       
        </Row>
      </Container>
      <Container>        
          <Search/>        
      </Container>

      <CardList />
      
    
    </div>
  );
}

export default App;
