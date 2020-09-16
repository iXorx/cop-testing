import {
  indentNormalizer
} from 'spectacle';

export const step6 = indentNormalizer(`
it("has a list of Pokémons", () => {
  const { getByText } = render(<App />);

  for (let pokemon of data.results) {
    expect(getByText(pokemon.name)).toBeInTheDocument();
  }
});
`);
