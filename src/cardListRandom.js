import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export default class CardList extends React.Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    let i = 1;
    let offSet = 0;
    let pokemon = [];
    while (i <= 10) {
      offSet = Math.floor(Math.random() * (964 - 1) + 1);
      let apiURL = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offSet}`;
      const call = await axios.get(apiURL);
      pokemon.push(...call.data.results);
      i++;
    }
    this.setState({ pokemon: pokemon });
    console.log(pokemon);
  }

  render() {
    return this.state.pokemon.map((pokemon) => {
      return (
        <div className="myCardContainer">
          <Card className="myCard">
            {
              <Card.Img
                variant="top"
                src={
                  "https://pokeres.bastionbot.org/images/pokemon/" +
                  pokemon.url.slice(34, pokemon.url.lenght).replace("/", "") +
                  ".png"
                }
              />
            }
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}
