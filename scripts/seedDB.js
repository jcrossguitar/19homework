const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const PokemonSeed = [
  {
    Pokemon: "Charmander",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Bulbasaur",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Squirtle",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Pikachu",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Growlithe",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Coraline",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Mew",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Geodude",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Caterpie",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Lickitung",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Oddish",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Bellsprout",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Nidoran",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Vulpix",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Eevee",
    date: new Date(Date.now())
  },
  {
    Pokemon: "Dratini",
    date: new Date(Date.now())
  }
];

db.PokemonDB
  .remove({})
  .then(() => db.PokemonDB.collection.insertMany(PokemonSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
