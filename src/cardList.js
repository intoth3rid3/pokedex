import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export default class CardList extends React.Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    const offSet = Math.floor(Math.random() * (964 - 1) + 1);
    const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offSet}`;
    axios.get(apiURL).then((res) => {
      const pokemon = res.data.results;
      console.log(pokemon);
      this.setState({ pokemon });
    });
  }
  //   fare 10 chiamate randomiche e non in sequenza

  render() {
    return this.state.pokemon.map((pokemon) => (
      <div className="myCardContainer">
        <Card className="myCard">
          <Card.Img
            variant="top"
            src={
              "https://pokeres.bastionbot.org/images/pokemon/" +
              pokemon.url.slice(34, pokemon.url.lentght).replace("/", "") +
              ".png"
            }
          />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  }
}
