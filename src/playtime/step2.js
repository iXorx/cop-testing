import {
  indentNormalizer
} from 'spectacle';

export const step2 = indentNormalizer(`
// app.jsx
import React from "react";

export default function App() {
  return (
    <section>
      <article>Bulbasaur</article>
      <article>Ivysaur</article>
      <article>Venusaur</article>
      <article>Charmander</article>
    </section>
  );
}
`);
