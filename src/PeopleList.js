import React from 'react';
import { PeopleListItem } from './PeopleListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid white;
    padding: 10px;    
`

// "key" is not a prop, it is sthere for good rendering purposes
export const PeopleList = ({ People }) => (
    <Wrapper>
        {People.map(person => <PeopleListItem person={person} key={person.name}/>)}
    </Wrapper>
);