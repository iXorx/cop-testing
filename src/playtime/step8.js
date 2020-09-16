import {
  indentNormalizer
} from 'spectacle';

export const step8 = indentNormalizer(`
it("shows a list of Pokémons retrieved from an API", async () => {
    // Modificamos el comportamiento de la función fetch
    // para que devuelva los resultados que nos interesan, en lugar
    // de ejecutarse
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);

    // Comprobamos que se han obtenido los resultados utilizando fetch
    expect(window.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon");
    expect(window.fetch).toHaveBeenCalledTimes(1);

    // Comprobamos que la aplicación renderiza la colección de resultados proporcionada por el mock
    for (let pokemon of data.results) {
      expect(getByText(pokemon.name)).toBeInTheDocument();
    }
  });
`);
