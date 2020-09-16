import {
  indentNormalizer
} from 'spectacle';

export const step7 = indentNormalizer(`
// app.jsx
import data from "./data.json";

export default function App() {
  return (
    <section>
      {data.results.map((item) => (
        <PokemonListItem key={item.name} name={item.name} />
      ))}
    </section>
  );
}
`);
