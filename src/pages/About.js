import he from 'he'

function About({ aboutDataAsProp }) {
    console.log('On about page')
    console.log(aboutDataAsProp)
    return (
      <div style={{ marginTop: 40 }}>
       <div className="container">
       <div className="row">
       <div className="col-md-6">
        <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src={aboutDataAsProp.groomInfo.image_url} class="card-img" alt={aboutDataAsProp.groomInfo.first_name}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{aboutDataAsProp.groomInfo.first_name} {" "} {aboutDataAsProp.groomInfo.middle_name} {" "} {aboutDataAsProp.groomInfo.last_name}</h5>
                {/* ESCAPE HTML ENTITIES */}
                {/* https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js */}
                {/* <p class="card-text">{he.decode(aboutDataAsProp.groomInfo.description)}</p> */}
                <p class="card-text">{aboutDataAsProp.groomInfo.description}</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div class="card mb-3" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src={aboutDataAsProp.brideInfo.image_url} class="card-img" alt={aboutDataAsProp.brideInfo.first_name}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{aboutDataAsProp.brideInfo.first_name} {" "} {aboutDataAsProp.brideInfo.middle_name} {" "} {aboutDataAsProp.brideInfo.last_name}</h5>
                {/* ESCAPE HTML ENTITIES */}
                {/* https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js */}
                {/* <p class="card-text">{he.decode(aboutDataAsProp.brideInfo.description)}</p> */}
                <p class="card-text">{aboutDataAsProp.brideInfo.description}</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
       </div>
      </div>
    );
  }
  
  
  
  export default About;