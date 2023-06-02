import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const ShowList = ({ setSelectedShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const removeTags = (html) => {
    // Regular expression to match HTML tags
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, '');
  };

  return (
    <Container className="mt-4">
    <h1 className="text-center" style={{ color: 'blue' }}>
    TV Shows
  </h1>
      <Row>
        {shows.map((show) => (
          <Col sm={12} md={6} lg={4} key={show.show.id}>
            <Card className="my-4">
              <Card.Img
                variant="top"
                src={show.show.image?.medium}
                alt={show.show.name}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{show.show.name}</Card.Title>
                <Card.Text>{removeTags(show.show.summary)}</Card.Text>
                <Button
              variant="primary"
              onClick={() =>  handleShowClick(show)}
              className="d-block mx-auto">
                  View Summary
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowList;
