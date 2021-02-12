
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-left:3.5%;
    padding-right:3.5%;
`;

const TitleWrapper = styled.div`
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: right;
    font-size: 2em;
`;


const Home = () => (
    <>
        <Wrapper>
            <TitleWrapper>Scrapers!</TitleWrapper>
        </Wrapper>
    </>
);

export default Home;