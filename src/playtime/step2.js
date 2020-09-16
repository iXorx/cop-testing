import {
  indentNormalizer
} from 'spectacle';

export const step2 = indentNormalizer(`
import React from "react";

export default function App() {
  return (
    <section>
      <article>Aztecs</article>
      <article>Mayans</article>
      <article>Mongols</article>
    </section>
  );
}
`);
