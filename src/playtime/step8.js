import {
  indentNormalizer
} from 'spectacle';

export const step8 = indentNormalizer(`
// spy
const promise = Promise.resolve(PokemonData);

it("shows a list of Pokémons retrieved from an API", async () => {
    const { getByText } = render(<App />);

    await act(() => {
      return promise;
    });

    // Comprobamos que la aplicación renderiza la colección de resultados proporcionada por el mock
    for (let pokemon of data.results) {
      expect(getByText(pokemon.name)).toBeInTheDocument();
    }
  });
`);