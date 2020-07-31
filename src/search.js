import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";

class Search extends React.Component {
  state = {
    poke: [],
    loading: false,
    value: "",
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${val}`);
    const poke = await res.data.results;
    console.log("poke: " + poke);
    this.setState({ poke });
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderSearch() {
    let poke = <h1>There's no poke</h1>;
    if (this.state.poke) {
      poke = (
        <div className="myCardContainer">
          <Card className="myCard">
            {
              <Card.Img
                key={poke.name}
                variant="top"
                src={
                  "https://pokeres.bastionbot.org/images/pokemon/" +
                  poke.url.slice(34, poke.url.lenght).replace("/", "") +
                  ".png"
                }
              />
            }
            <Card.Body>
              <Card.Title>{poke.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }

    return poke;
  }

  render() {
    return (
      <div className="search">
        <form>
          <label htmlFor="pokeId">
            Type here:
            <input
              type="number"
              required
              value={this.state.value}
              onChange={(e) => this.onChangeHandler(e)}
              className="inputId"
            />
          </label>
          <Button variant="success">Search</Button>
        </form>
        <br />
        <img
          src="https://pokeres.bastionbot.org/images/pokemon/5.png"
          className="lorem"
          alt="lorem"
        />
        {this.renderpoke}
      </div>
    );
  }
}

export default Search;
