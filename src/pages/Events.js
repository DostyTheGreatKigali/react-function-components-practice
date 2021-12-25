import React, { useEffect, useState } from 'react';

function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      // console.log('Events Data')
      // console.log(eventsData)
    const fetchEventsData = async () => {
      // const response = await fetch(`https://swapi.dev/api/people`);
      // const response = await fetch(`http://localhost:8000/api/lyrics`);
      const response = await fetch(`http://elitte.host/api/events`);
      const newData = await response.json();
      console.log('New Events Data')
      console.log(newData);
      setEventsData(newData.events)
      setIsLoading(false)
      // setEventsData({ eventsData: newData})
      console.log('Events Data')
      console.log(eventsData.events)
    };
    fetchEventsData();
  }, []);

  let eventsArray = eventsData.map(event => {
    return (
      <div className="col-md-4" key={event.id}>
    <div className="card" style={{width: '18rem'}}>
      <img src={event.image_url} className="card-img-top" alt={event.title} />
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">{event.event_date}</p>
        <button className="btn btn-primary">{event.venue}</button>
      </div>
    </div>
      </div>
    )
    
    ;
  })

    return (
      <div style={{ marginTop: 40 }}>
        <h1 className="mb-5">Events</h1>
        <div className="container">
          <div className="row">
            {/* {
              eventsArray.length ? eventsArray : <h1>Loading...</h1>
            } */}

            {/* {
              isLoading ? <h1>Loading...</h1> 
              : eventsData.map(event => {
                return (
                  <div className="col-md-4" key={event.id}>
                <div className="card" style={{width: '18rem'}}>
                  <img src={event.image_url} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.event_date}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                  </div>
                )
                
                ;
              })
            } */}

            {
              isLoading ? <h1 className="text-center text-danger">Loading...</h1> : eventsArray
            }
          </div>
        </div>       
      </div>
    );
  }
  
  
  
  export default Events;