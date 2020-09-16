import {
  indentNormalizer
} from 'spectacle';

export const step7 = indentNormalizer(`
import React from 'react';
import data from "./data.json";

const CivilazationListItem = ({ name }) => <article className="list-item">{name}</article>;

export default function App() {
  return (
    <section>
    {data.civilizations.map((item) => (
      <CivilazationListItem key={item.name} name={item.name} />
    ))}
  </section>
  );
}
`);
