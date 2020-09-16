import {
  indentNormalizer
} from 'spectacle';

export const step9 = indentNormalizer(`
import React from 'react';

const getCivilazation = async () => {
  const response = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
  const { results } = await response.json();
  return results;
}

const CivilazationListItem = ({ name }) => <article className="list-item">{name}</article>;

function App() {
  const [civilazations, setCivilazations] = React.useState([]);

  React.useEffect(() => {
    getCivilazation().then(setCivilazations);
  }, []);

  return (
    <div className="App">
      <section>
        {civilazations.map((item) => (
          <CivilazationListItem key={item.name} name={item.name} />
        ))}
      </section>
    </div>
  );
}
`);
