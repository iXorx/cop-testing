import {
  indentNormalizer
} from 'spectacle';

export const step9 = indentNormalizer(`
const getCivilazation = async () => {
  const response = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
  const { results } = await response.json();
  return results;
}

const CivilizationListItem = ({ name }) => <article className="list-item">{name}</article>;

function App() {
  const [civilizations, setCivilizations] = React.useState([]);

  React.useEffect(() => {
    getCivilazation().then(setCivilizations);
  }, []);

  return (
    <div className="App">
      <section>
        {civilizations.map((item) => (
          <CivilizationListItem key={item.name} name={item.name} />
        ))}
      </section>
    </div>
  );
}
`);
