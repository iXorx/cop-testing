import {
  indentNormalizer
} from 'spectacle';

export const step5 = indentNormalizer(`
// data.json
{
"civilizations": [
  {
    "id": 1,
    "name": "Aztecs",
    "expansion": "The Conquerors",
    "army_type": "Infantry and Monk",
    "unique_unit": [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
    ],
    "unique_tech": [
      "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
    ],
    "team_bonus": "Relics generate +33% gold",
    "civilization_bonus": [
      "Villagers carry +5",
      "Military units created 15% faster",
      "+5 Monk hit points for each Monastery technology",
      "Loom free"
    ]
  },
  //...
]
}
`);
