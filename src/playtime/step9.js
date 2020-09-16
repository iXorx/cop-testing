import {
  indentNormalizer
} from 'spectacle';

export const step9 = indentNormalizer(`
// /services/pokemons.js
export async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await response.json();
  return results;
}

// app.jsx
export default function App() {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);

  return (
    <section>
      {pokemons.map((item) => (
        <PokemonListItem key={item.name} name={item.name} />
      ))}
    </section>
  );
}
`);
