import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

const ShowSummary = ({ selectedShow, handleBookTicket }) => {
  const { name, summary } = selectedShow.show;
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  const handleBookTicketClick = () => {
    setBookingFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and booking logic here
    // You can access the movie name and relevant details using the selectedShow prop

    // Reset the form and hide it
    setBookingFormVisible(false);
  };

  const removeTags = (html) => {
    // Regular expression to match HTML tags
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, '');
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
        <Card.Title className="text-center" style={{ fontSize: '40px', color: 'blue' }}>
        {name}
          </Card.Title>
          <Card.Text>{removeTags(summary)}</Card.Text>
          <Button variant="primary" onClick={handleBookTicketClick} className="d-block mx-auto mb-3">
            Book Ticket
          </Button>

          {bookingFormVisible && (
            <div className="booking-form mt-4">
              <h3>Booking Form</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="movieName">
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control type="text" value={name} readOnly />
                </Form.Group>
                {/* Add other relevant form fields here */}
                <Button type="submit" className="mx-auto d-block mt-3">
                  Submit
                </Button>
              </Form>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShowSummary;
