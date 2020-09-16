import React from 'react'
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

// SPECTACLE_CLI_THEME_START
export const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
export const template = () => (
  <FlexBox>
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top={0}
      right={0}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="center"
      position="absolute"
      bottom={0}
    >
      <Box padding="1em">
        <Progress size={5} color="#414c79" />
      </Box>
    </FlexBox>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END