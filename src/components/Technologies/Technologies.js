import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            HTML <br />
            CSS <br />
            Angular <br />
            Bootstrap <br />
            SASS <br />
            Svelte <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJS <br />
            Javascript <br />
            PHP <br />
            .NET <br />
            Express.js <br />
            jQuery <br />
            MongoDB <br />
            MySQL <br />
            Postman <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C <br />
            C++ <br />
            Javascript <br />
            Python <br />
            Solidity <br />
            Typescript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Misc.</ListTitle>
          <ListParagraph>
            Markdown <br />
            Latex <br />
            AWS <br />
            Google Cloud Platform <br />
            Heroku <br />
            Netlify <br />
            Jenkins <br />
            Arduino <br />
            Docker <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider color />
  </Section>
);

export default Technologies;
