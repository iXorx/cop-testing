import {
  indentNormalizer
} from 'spectacle';

export const step4 = indentNormalizer(`
import React from "react";

const CivilazationListItem = ({ name }) => <article className="list-item">{name}</article>;

export default function App() {
  return (
    <section>
      <CivilazationListItem name="Aztecs"/>
      <CivilazationListItem name="Mayans"/>
      <CivilazationListItem name="Mongols"/>
    </section>
  );
}
`);
