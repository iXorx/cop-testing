import {
  indentNormalizer
} from 'spectacle';

export const step4 = indentNormalizer(`
// app.jsx
import React from "react";
import PokemonListItem from "./pokemon-list-item";

export default function App() {
  return (
    <section>
      <PokemonListItem name="Bulbasaur" />
      <PokemonListItem name="Ivysaur" />
      <PokemonListItem name="Venusaur" />
      <PokemonListItem name="Charmander" />
    </section>
  );
}
`);
