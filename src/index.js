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
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';
import { theme, template } from './config'
import { cppCodeBlock } from './examples'

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
          <CodeSpan>BDD, TDD, unit?</CodeSpan>
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
        evaluate the functionality
        met the specified requirements
        identify the defects
        the product is defect-free
      </Notes>
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
          <CodeSpan>System</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Regression</CodeSpan>
        </ListItem>
      </UnorderedList>
      <Notes>
      • Tests Unitarios: Este tipo de pruebas comprueban elementos básicos de nuestro
      software de forma aislada. Son los test más importantes a la hora de validar
      las reglas de negocio que hemos desarrollado. Nos centraremos en este tipo de
      pruebas a lo largo de la sección de testing.
      • Tests de integración: Los test de integración son aquellos que prueban conjuntos de elementos básicos, normalmente suelen incluirse en este tipo de pruebas
      algunos elementos de infraestructura, como base de datos o llamadas a APIs.
      • Tests de sistema: Este tipo de test, también denominados end-to-end o de extremo a extremo, prueban múltiples elementos de nuestra arquitectura simulando
      el comportamiento de un actor con nuestro software.
      • Tests de regresión: Este tipo de pruebas se encargan de verificar la funcionalidad ya entregada, es decir, son pruebas que se usan para detectar que
      en los cambios introducidos en el sistema no se genera un comportamiento
      inesperado. En definitiva, cualquier tipo de test funcional de los que hemos visto
      podría ser un test de regresión, siempre y cuando hayan pasado correctamente
      en algún momento y, tras realizar algún cambio en el sistema, empiecen a fallar
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Non-Functional testing</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Load</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Velocity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Usability</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Security</CodeSpan>
        </ListItem>
        <Notes>
          Tests de carga: Son test mediante los que se observa el comportamiento de
          una sistema software bajo diferentes números de peticiones durante un tiempo
          determinado.
          • Tests de velocidad: Comprueban si el sistema genera los resultados en un
          tiempo aceptable.
          • Tests de usabilidad: Son pruebas en las que se trata de evaluar la UX del
          sistema.
          • Tests de seguridad: Se trata de un conjunto de pruebas en las que se trata de
          evaluar si el sistema desarrollado está expuesto a vulnerabilidades conocidas.
        </Notes>
      </UnorderedList>
    </Slide>
    {/* BDD, TDD, unit? */}
    <Slide>
      <Heading fontSize="50px">BDD, TDD, unit?</Heading>
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
          fontSize={18}
          language="cpp"
          autoFillHeight
      >
        {`
import React from 'react'

const Hello = ({ name }) => <div>{name}</div>

export default Hello;
        `}
      </CodePane>
      <br />
      <CodePane
          fontSize={18}
          language="cpp"
          autoFillHeight
      >
        {`
import { render } from 'react-testing-library'
import Hello from './Hello'

describe('Hello', () => {
  it('should contains name', () => {
    const { getByText } = render(<Hello name="Pep" />);
    getByText('Pep');
  })
})
      `}
      </CodePane>
      <Notes>
        Testing simple React component

        - render: Render into a container which is appended to document.body
        - getByText will search for all elements that have a text node with textContent matching the given TextMatch
      </Notes>
    </Slide>
    {/* Time to play */}
    <Slide>
      <Heading fontSize="50px">Time to play</Heading>
    </Slide>
    <Slide>
      <FlexBox style={{'display': 'flex', 'flexDirection': 'column'}} height="100%">
        <Markdown>
          {`
            > “Program testing can be used to show the presence of bugs,
            but never to show their absence!”
          `}
        </Markdown>
        <img src="https://images.gr-assets.com/authors/1479514907p4/1013817.jpg" />
        <Text>Edsger W. Dijkstra</Text>
      </FlexBox>
    </Slide>



{/* ----------------- INSPIRATION -------------------- */}
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading fontSize="50px">Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide transitionEffect="slide">
      <Heading fontSize="50px">Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42]
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
    </Slide>
    <Slide>
      <Heading fontSize="50px">Animated Elements</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{' '}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              Logo
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown

          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes

        1. Even create
        2. Lists in Markdown


        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!

        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`

        ### A slide can have multiple code blocks too.

        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`

        Notes: These are more notes
      `}
    </Markdown>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
