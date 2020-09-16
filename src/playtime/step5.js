import {
  indentNormalizer
} from 'spectacle';

export const step5 = indentNormalizer(`
// App.test.jsx
import React from "react";
import App from "./app";
import { render } from "@testing-library/react";

describe("Age of Empires app", () => {
  it("has a list of civilizations including Mayans", () => {
    const { getByText } = render(<App />);

    expect(getByText(/Mayans\b/i)).toBeInTheDocument();
  });
});
`);
