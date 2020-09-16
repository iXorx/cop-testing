import React from 'react';
import ReactDOM from 'react-dom';
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';
import { theme, template } from './config'
import * as steps from './playtime';

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    {/* Welcome */}
    <Slide>
      <FlexBox height="100%">
        <Heading margin="0px" fontSize="100px">
          it('should be about testing', ...)
        </Heading>
      </FlexBox>
      <Heading margin="10px" fontSize="30px">
        {`by Marc Ferret & Jordi Turull`}
      </Heading>
    </Slide>
    {/* Agenda */}
    <Slide>
      <Heading fontSize="50px">Agenda</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>test..what?</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>React testing library</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Practical examples</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Tips</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Time to play</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    {/* test..what? */}
    <Slide>
      <Heading fontSize="50px">test..what?</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>What is a test</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Types of testing</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Test anatomy</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>BDD vs TDD</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Coverage</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Markdown containsSlides>
          {`> The Best Kind of Test Is a Failing Test`}
        </Markdown>
      </FlexBox>
    </Slide>
    {/* What is a test */}
    <Slide>
      <Heading fontSize="50px">What is a test</Heading>
      <Text>
        Software testing is a process, to <b>evaluate the functionality</b> of a software
        application with an intent to find whether the developed software <b>met
        the specified requirements</b> or not and to <b>identify the defects</b> to ensure
        that the product is defect-free in order to produce the quality product.
      </Text>
      <Text style={{ textAlign: 'center' }}>
        <Image src="https://media.giphy.com/media/MgBJ3UifivIY/giphy.gif" />
      </Text>
      <Notes>
        <p>
        evaluate the functionality
        </p>
      <p>
        met the specified requirements
        </p>
      <p>
        identify the defects
        </p>
      <p>
        the product is defect-free
        </p>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height={'100%'}>
        <Image src={'/src/img/chart.jpg'} />
      </FlexBox>
    </Slide>
    {/* Types of testing */}
    <Slide>
      <Heading fontSize="50px">Types of testing</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Manual vs Automatic</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Functional vs Non-functional</CodeSpan>
        </ListItem>
      </UnorderedList>
      <Notes>
        <p>El testing manual
consiste en preparar una serie de casos y ejecutar a mano los elementos necesarios,
<b> son lentos, difíciles de replicar, caros</b></p>
        <p>Aunque debemos ser conscientes de que no todo es automatizable</p>
        <p>Los test funcionales hacen referencia a las pruebas que verifican el correcto comportamiento
del sistema, subsistema o componente</p>
<p>El objetivo de los test no funcionales es la verificación de un requisito que especifica
criterios que pueden usarse para juzgar la operación de un sistema, como por
ejemplo la disponibilidad, accesibilidad, usabilidad, mantenibilidad, seguridad y/o
rendimiento</p>
<p><b>centran en comprobar cómo
responde el sistema, no en qué hace o debería hacer</b></p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Functional testing</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Unit</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Integration</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>System / E2E</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Regression</CodeSpan>
        </ListItem>
      </UnorderedList>
      <Notes>
      <p>
        • Tests Unitarios: Este tipo de pruebas comprueban elementos básicos de nuestro
      software de forma aislada. Son los test más importantes a la hora de validar
      las reglas de negocio que hemos desarrollado. Nos centraremos en este tipo de
      pruebas a lo largo de la sección de testing.
      </p>
      <p>
      • Tests de integración: Los test de integración son aquellos que prueban conjuntos de elementos básicos, normalmente suelen incluirse en este tipo de pruebas
      algunos elementos de infraestructura, como base de datos o llamadas a APIs.
      </p>
      <p>
      • Tests de sistema: Este tipo de test, también denominados end-to-end o de extremo a extremo, prueban múltiples elementos de nuestra arquitectura simulando
      el comportamiento de un actor con nuestro software.
      </p>
      <p>
        • Tests de regresión: Este tipo de pruebas se encargan de verificar la funcionalidad ya entregada, es decir, son pruebas que se usan para detectar que
      en los cambios introducidos en el sistema no se genera un comportamiento
      inesperado. En definitiva, cualquier tipo de test funcional de los que hemos visto
      podría ser un test de regresión, siempre y cuando hayan pasado correctamente
      en algún momento y, tras realizar algún cambio en el sistema, empiecen a fallar
      </p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Non-Functional testing</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Load</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Velocity / Performance</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Usability</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Security</CodeSpan>
        </ListItem>
        <Notes>
          <p>• Tests de carga: Son test mediante los que se observa el comportamiento de
          una sistema software bajo diferentes números de peticiones durante un tiempo
          determinado.</p>
          <p>• Tests de velocidad: Comprueban si el sistema genera los resultados en un
          tiempo aceptable.</p>
          <p>• Tests de usabilidad: Son pruebas en las que se trata de evaluar la UX del
          sistema</p>
          <p>• Tests de seguridad: Se trata de un conjunto de pruebas en las que se trata de
          evaluar si el sistema desarrollado está expuesto a vulnerabilidades conocidas.</p>
        </Notes>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox flexDirection='column'>
          <Text>Testing Pyramid</Text>
          <Image src={'/src/img/piramide.PNG'} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox flexDirection='column'>
        <Text>Ice cream antipattern</Text>
        <Image src={'/src/img/helado.PNG'} />
      </FlexBox>
    </Slide>
    {/* Test anatomy */}
    <Slide>
      <Heading fontSize="50px">Test anatomy</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Arrange</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Act</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Assert!</CodeSpan>
        </ListItem>
      </UnorderedList>
      <Text></Text>
      <Notes>
        <p>conocido como AAA</p>
        <p>• Preparación (Arrange): en esta parte del test preparamos el contexto para
poder realizar la prueba. Por ejemplo, si probamos un método de una clase,
primero tendremos que instanciar dicha clase para probarlo. Además, una parte
la preparación puede estar contenida en el método SetUp (Before en el caso de
Jest), si es común a todos los test de la clase.</p>
        <p>• Actuación (Act): ejecutamos la acción que queremos probar. Por ejemplo,
invocar un método con unos parámetros.</p>
        <p>• Aserción (Assert): verificamos si el resultado de la acción es el esperado. Por
ejemplo, el resultado de la invocación del método anterior tiene que devolver
un valor determinado.</p></Notes>
    </Slide>
    <Slide>
    <CodePane
        autoFillHeight
        style={{ overflow: 'hidden' }}
        fontSize={18}
        language="javascript"
        autoFillHeight
      >
{`
test('return zero if receive one', () => {
  //Arrange
  const n = 1;

  //Act
  const result = fibonacci(n);

  //Assert
  expect(result).toBe(0);
});
`}
      </CodePane>
    </Slide>
    {/* BDD vs TDD */}
    <Slide>
      <Heading fontSize="50px">BDD vs TDD</Heading>
    </Slide>
    {/* TDD cycle */}
    <Slide>
      <Heading fontSize="50px">TDD cycle</Heading>
      <FlexBox>
        <Image src='https://miro.medium.com/max/1590/1*vZil_bXiPA9VOx3hZCsg2Q.png' />
      </FlexBox>
      <Notes>
        <h4>Red-Green-Refactor</h4>
        <p>• No escribirás código de producción sin antes escribir un test que falle.</p>
        <p>• No escribirás más de un test unitario suficiente para fallar (y no compilar es fallar).</p>
        <p>• No escribirás más código del necesario para hacer pasar el test.</p>
    </Notes>
    </Slide>
    {/* Coverage */}
    <Slide>
      <Heading fontSize="50px">Coverage</Heading>
    </Slide>
    {/* React testing library */}
    <Slide>
      <Heading fontSize="50px">React testing library</Heading>
      <Text style={{ textAlign: 'center' }}>
        <img width="128px" src="https://testing-library.com/img/octopus-128x128.png" />
      </Text>
      <Text><b>React Testing Library</b> is a library used to interact with your React components like a human being.</Text>
      <Text>You'll see just rendered HTML from your React Components.</Text>
      <Notes>
        is used to interact ....
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">React testing library</Heading>
      <Text style={{ textAlign: 'center' }}>
        <img src="https://media.giphy.com/media/M11UVCRrc0LUk/giphy.gif" />
      </Text>
      <Notes>¿Como interactuaria un humano con la pantalla?</Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">React testing library</Heading>
      <Markdown>
      {`
        ||No Match  |1 Match	|1+ Match	|Await?|
        |---------|-----------|----------|----------|----------|
        |getBy|	throw|	return|	throw|	No|
        |findBy|	throw|	return|	throw|	Yes|
        |queryBy|	null|	return|	throw|	No|
        |getAllBy|	throw|	array|	array|	No|
        |findAllBy|	throw|	array|	array|	Yes|
        |queryAllBy|	[]|	array|	array|	No|
      `}
      </Markdown>
      <Notes>
        Podemos ver las distintas queries y lo que devuelven
      </Notes>
    </Slide>
    {/* Practical examples */}
    <Slide>
      <Heading fontSize="50px">Practical examples</Heading>
      <CodePane
        autoFillHeight
        style={{ overflow: 'hidden' }}
        fontSize={18}
        language="javascript"
        autoFillHeight
      >
{`import React from 'react'

const Hello = ({ name }) => <div>{name}</div>

export default Hello;`}
      </CodePane>
      <br />
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
{`import { render } from 'react-testing-library'
import Hello from './Hello'

describe('Hello', () => {
  it('should contains name', () => {
    const { getByText } = render(<Hello name="Pep" />);
    getByText('Pep');

    expect()
  })
})`}
      </CodePane>
      <Notes>
        Testing simple React component

        - render: Render into a container which is appended to document.body
        - getByText will search for all elements that have a text node with textContent matching the given TextMatch
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Practical examples</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
{`const useHello = ({ name }) => {name};

export default useHello;`}
      </CodePane>
      <br />
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
{`import { renderHook } from '@testing-library/react-hooks';
const { result } = renderHook(() => useHello('Pep'));

expect(result.current).toEqual({
  name: 'Pep',
});
`}
      </CodePane>
      <Notes>
        Testing a hook

        - renderHook: Render hook and check what is the result
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Practical examples</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {`https://www.polvara.me/posts/how-to-test-asynchronous-methods/`}
      </CodePane>
      <br />
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {``}
      </CodePane>
      <Notes>
        Testing a aysnc method

        - renderHook: Render hook and check what is the result
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Practical examples</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {`https://es.reactjs.org/docs/testing-recipes.html#act`}
      </CodePane>
      <br />
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {``}
      </CodePane>
      <Notes>
        Testing amb el metodo act

        Cuando se escriben pruebas de interfaz de usuario, tareas como el renderizado, los eventos de usuario, o la obtención de datos pueden considerarse “unidades” de interacción con la interfaz de usuario.
        Para preparar la asertividad en un componente, debes envolver el código que lo renderiza y que realiza actualizaciones sobre este en un llamado a act(). Esto hace que tus pruebas corran de una forma más parecida a como lo hace React en el navegador.
      </Notes>
    </Slide>
    {/* Tips */}
    <Slide>
      <Heading fontSize="50px">Tips</Heading>
    </Slide>
    {/* Time to play */}
    <Slide>
      <Heading fontSize="50px">Time to play</Heading>
      <Text style={{ textAlign: 'center' }}>
        <Image src="https://media.giphy.com/media/L3txcnbi3ODhV8XbcC/giphy.gif" />
      </Text>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Defining a test</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step1}
      </CodePane>
      <Text>
        Error: Unable to find an element with the text: /Mayans\b/i. This could be
        because the text is broken up by multiple elements. In this case, you can provide
         a function for your text matcher to make your matcher more flexible.
      </Text>
      <Notes>
        <p>Definimos un test, buscaremos la civilización Maya</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step2}
      </CodePane>
      <Notes>
        <p>Implementando el primer prototipo</p>
        <p>Como ves, el código de mi componente no podría ser más sencillo. Casi me atrevería a decir que es un poco absurdo. Pero te permitirá comprobar varias cosas antes de avanzar más.</p>
        <p>Déjame insistir: haz una pequeña pausa antes de avanzar más.</p>
        <p>Ejecuta las pruebas y asegúrate de que pasan:</p>
        <br />
        <p>Dir abans de passar al següent slide: Piensa: ¿cómo podemos mejorar nuestra implementación en este punto? Lo primero que podríamos hacer es extraer cada elemento de la lista a un componente. Así podremos trabajar en darle un poco de estilo y evitar repetir código.</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step3}
      </CodePane>
      <Notes>
        <p>Nos quedaría así</p>
        <br />
        <p>Dir abans de passar al següent slide: Nuestro app.jsx quedaría así:</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step4}
      </CodePane>
      <Notes>
        <p>Como ves, el componente App sigue teniendo código repetido. Podemos mejorarlo extrayendo un listado de Pokémon e iterando los elementos para renderizarlos. Aprovecharemos para mirar la documentación de la API y modelar el contrato que vamos a utilizar.</p>
        <p>Ahora queremos empezar a consumir una API, pero no nos lanzamos a hacer la implementación. No hemos llegado a este punto, aún seguimos en la fase de refactor, decidiendo la mejor jerarquía de componentes para nuestra aplicación</p>
        <p>Vamos a empezar a crear un Mock del la respuesta de la API en un fichero JSON</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step5}
      </CodePane>
      <Notes>
        <p>Antes de pasar a la siguiente slide: Ha llegado el momento de mejorar la implementación de nuestro test y comprobar que no solo Bulbasaur aparece en el listado, sino todos los elementos de la primera página de resultados. Podemos utilizar el archivo data.json para escribir una nueva especificación más completa que la anterior.</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step6}
      </CodePane>
      <Notes>
        <p>Nuestro nuevo test fallará 🔴, ya que el componente App no está utilizando el JSON de datos para mostrar todos los elementos.</p>
        <p>En app.jsx, importa el archivo y utiliza la propiedad results de la estructura de datos para pintar los elementos del listado. Como ves, es un array, así que podemos aplicar .map() directamente:</p>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Time to play - Implementing the prototype</Heading>
      <CodePane
          fontSize={18}
          language="javascript"
          autoFillHeight
      >
        {steps.step7}
      </CodePane>
      <Notes>
        <p>Asegurémonos de que nuestro test sigue estando verde tras este cambio 🟢. Debería ser así, ya que el pequeño Bulbasaur sigue apareciendo en el listado.</p>
        <p>Con esto ya nos hemos asegurado de que nuestra jerarquía de componentes visuales ya es capaz de renderizar todos los elementos de un listado. Ahora solo tenemos que proporcionarlos. Es el momento de consumir la API.</p>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox style={{'display': 'flex', 'flexDirection': 'column'}} height="100%">
        <Markdown>
          {`
            > “Program testing can be used to show the presence of bugs,
            >
            > but never to show their absence!”
          `}
        </Markdown>
        <img src="https://images.gr-assets.com/authors/1479514907p4/1013817.jpg" />
        <Text>Edsger W. Dijkstra</Text>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
