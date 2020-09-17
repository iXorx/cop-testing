import {
  indentNormalizer
} from 'spectacle';

export const step8 = indentNormalizer(`
import React from "react";
import App from "./app";
import { render, act } from "@testing-library/react";
import { data } from './data.json'

const promise = Promise.resolve(data);

it("shows a list of Pokémons retrieved from an API", async () => {
  const { getByText } = render(<App />);

  await act(() => {
    return promise;
  });

  // Comprobamos que la aplicación renderiza la colección de resultados proporcionada por el mock
  for (let civilization of data.civilizations) {
    expect(getByText(civilization.name)).toBeInTheDocument();
  }
});
`);