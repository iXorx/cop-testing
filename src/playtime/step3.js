import {
  indentNormalizer
} from 'spectacle';

export const step3 = indentNormalizer(`
// pokemon-list-item.jsx
import React from "react";

export default function PokemonListItem({ name }) {
  return <article className="list-item">{name}</article>;
}
`);
