import React, { useEffect, useState } from 'react';

function Events() {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
      // console.log('Events Data')
      // console.log(eventsData)
    const fetchEventsData = async () => {
      // const response = await fetch(`https://swapi.dev/api/people`);
      // const response = await fetch(`http://localhost:8000/api/lyrics`);
      const response = await fetch(`http://elitte.host/api/events`);
      const newData = await response.json();
      console.log('New Data')
      console.log(newData);
      setEventsData(newData)
      console.log('Events Data')
      console.log(eventsData)
    };
    fetchEventsData();
  }, []);

    return (
      <div style={{ marginTop: 40 }}>
      <h2>Events</h2>
       
      </div>
    );
  }
  
  
  
  export default Events;