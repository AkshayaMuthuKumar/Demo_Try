import React, { useState } from 'react';
import axios from 'axios';

const AppointmentDetails = ({
  selectedDoctor,
  appointmentDate,
  selectedTime,
  userName,
  age,
  userMobile,
}) => {
  const [savedToBackend, setSavedToBackend] = useState(false);

  const saveToBackend = () => {
    const userData = {
      doctor: selectedDoctor,
      appointmentDate,
      appointmentTime: selectedTime,
      name: userName,
      age,
      mobile: userMobile,
    };

    axios
      .post('http://localhost:5000/api/saveUserData', userData)
      .then((response) => {
        console.log('Data sent to backend successfully:', response.data);
        setSavedToBackend(true);
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error);
        // Handle error
      });
  };

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Doctor: {selectedDoctor}</p>
      <p>Appointment Date: {appointmentDate}</p>
      <p>Selected Time: {selectedTime}</p>
      <p>Name: {userName}</p>
      <p>Age: {age}</p>
      <p>Mobile: {userMobile}</p>
      {!savedToBackend && (
        <button onClick={saveToBackend}>Save to Backend</button>
      )}
      {savedToBackend && <p>Data saved to backend!</p>}
    </div>
  );
};

export default AppointmentDetails;





