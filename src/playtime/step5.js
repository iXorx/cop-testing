import {
  indentNormalizer
} from 'spectacle';

export const step5 = indentNormalizer(`
// data.json
{
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
    // ...
  ]
}
`);
