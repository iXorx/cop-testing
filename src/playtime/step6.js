import {
  indentNormalizer
} from 'spectacle';

export const step6 = indentNormalizer(`
it("has a list of Civilazations", () => {
  const { getByText } = render(<App />);

  for (let civilazation of data.civilizations) {
    expect(getByText(civilazation.name)).toBeInTheDocument();
  }
});
`);
