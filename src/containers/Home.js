
import React from 'react';
import styled from 'styled-components';
import ScraperSection from '../components/ScraperSection';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = styled.div`
    padding-left:3.5%;
    padding-right:3.5%;
    text-align:center;
`;

const TitleWrapper = styled.div`
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: right;
    font-size: 2em;
`;

const Section = styled.div`
    border:solid;
    font-size: 2em;
`;

const Home = () => (
    <>
        <Wrapper>
            <TitleWrapper>Scraper Dashboard</TitleWrapper>
            <div>By the Newsroom Development Team</div>
            <Container className="justify-content-md-center">
                <Row className="py-4">
                    <Col> <ScraperSection image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRblupwPskN3qAOj-qZ59iT_nzD1InzuPrM_qcFAt5jo3iQl0KpYmUPaZAarPwJDhgyEi8&usqp=CAU" scraperName="Vergil" link='/vergil' description='View/Export course data' /> </Col>
                    <Col> <ScraperSection image="https://www.wilkes.edu/campus-life/student-development/career-development-and-internships/_images/handshake_logo_dark.png" scraperName="Handshake" link='/handshake' description='View/Export job posting data' /> </Col>
                    <Col> <ScraperSection image="" scraperName="Directory" link='/directory' description='View/Export student information data' /> </Col>
                </Row>
                <Row className="py-4">
                    <Col> <ScraperSection image="https://pbs.twimg.com/profile_images/1324430003640143877/bT7Rppq1.jpg" scraperName="Go Columbia Lions" link='/gocolumbialions' description='View/Export Go Columbia Lions Roster, Schedule, News, and Team Statistics data' /> </Col>
                    <Col> <ScraperSection image="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/72578370_144637026885253_2576969635886792704_n.png?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YjO9HVrdsPgAX_6Nhw6&_nc_ht=scontent-lga3-2.xx&oh=e8e8abac7f61e1003fb81e17501e3482&oe=6080007A" scraperName="Columbia Cofessions" link='/confessions' description='View/Export Columbia Confessions data' /> </Col>
                </Row>
            </Container>
        </Wrapper>
    </>
);

export default Home;