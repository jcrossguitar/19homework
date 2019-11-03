import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    Pokemon: [],
    PokemonName: "",
  };

  componentDidMount() {
    this.loadGame();
  }

  loadGame = () => {
    API.getPokemon()
      .then(res =>
        this.setState({ Pokemon: res.data, PokemonName: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.PokemonName) {
      API.saveBook({
        PokemonName: this.state.PokemonName
      })
        .then(res => this.loadGame())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Memory Game</h1>
            </Jumbotron>
                <div class="card">
                <img src="img_avatar.png" alt="Avatar" style="width:100%">
                <div class="container">
                <h4><b></b></h4> 
                <p></p> 
                </div>
            <Input
                value={this.state.PokemonName}
                onChange={this.handleInputChange}
                name="PokemonName"
                placeholder="PokemonName (required)"
              />
              <FormBtn
                disabled={!(this.state.PokemonName)}
                onClick={this.handleFormSubmit}
              >
                Pokemon!
              </FormBtn>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Do not click on the same image twice!</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.PokemonName} 
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
