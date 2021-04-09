import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Link from 'next/link'



const ScraperSection = ({ image, scraperName, link, description }) => {
    return (
        <Link style={{ color: "inherit", textDecoration: 'none' }} href={link}>
            <Card style={{ width: '20rem', margin: "auto" }}>
                <Card.Img className="card-img-top" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{scraperName} Scraper</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default ScraperSection;