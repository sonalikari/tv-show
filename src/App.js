import React, { useState } from "react";
import ShowList from "./ShowList";
import ShowSummary from "./ShowSummary";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (showName) => {
    // Open the booking form here and pass showName and other relevant details
    setBookingFormVisible(true);
  };

  return (
    <div>
      {!selectedShow && !bookingFormVisible && <ShowList setSelectedShow={handleShowClick} />}
      {selectedShow && !bookingFormVisible && (
        <ShowSummary selectedShow={selectedShow} handleBookTicket={handleBookTicket} />
      )}
      {bookingFormVisible && (
        <div>
          <h3>Booking Form</h3>
          {/* Render your booking form here */}
        </div>
      )}
    </div>
  );
};

export default App;
