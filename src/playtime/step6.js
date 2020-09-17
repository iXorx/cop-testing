import {
  indentNormalizer
} from 'spectacle';

export const step6 = indentNormalizer(`
it("has a list of Civilizations", () => {
  const { getByText } = render(<App />);

  for (let civilization of data.civilizations) {
    expect(getByText(civilization.name)).toBeInTheDocument();
  }
});
`);
