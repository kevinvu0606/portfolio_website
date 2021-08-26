import React from 'react';
import { DiFirebase, DiReact, DiRuby, DiPython, DiCss3 } from 'react-icons/di';
import { AiFillCloud, AiOutlineHtml5 } from 'react-icons/ai'
import { SiAzuredevops, SiPostgresql, SiMongodb } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I've worked on a range of tech from Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <br />
            <GrNode /> | Node
            <br />
            <DiRuby /> | Ruby
            <br />
            <DiPython /> | Python
            <br />
            <SiPostgresql /> | PostgreSQL
            <br />
            <SiMongodb /> | MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <br />
            <DiReact /> |  React.js
            <br />
            <AiOutlineHtml5 /> | HTML
            <br />
            <DiCss3 /> | CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillCloud size="3rem" />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            <br />
            <SiAzuredevops /> | Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
