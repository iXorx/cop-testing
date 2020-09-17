import {
  indentNormalizer
} from 'spectacle';

export const step4 = indentNormalizer(`
import React from "react";

const CivilizationListItem = ({ name }) => <article className="list-item">{name}</article>;

export default function App() {
  return (
    <section>
      <CivilizationListItem name="Aztecs"/>
      <CivilizationListItem name="Mayans"/>
      <CivilizationListItem name="Mongols"/>
    </section>
  );
}
`);
