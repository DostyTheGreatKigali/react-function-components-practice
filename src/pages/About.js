// import he from 'he'

function About({ aboutDataAsProp, isLoadingAsProp }) {
    console.log('On about page')
    console.log(aboutDataAsProp)
    return (
      <div style={{ marginTop: 40 }}>
       <h1 className="mb-5">About</h1>
       {
           isLoadingAsProp ? <h1 className="text-center text-danger">Loading...</h1>
           :
       <div className="container">
       <div className="row">
       <div className="col-md-6">
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={aboutDataAsProp.groomInfo.image_url} className="card-img" alt={aboutDataAsProp.groomInfo.first_name}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{aboutDataAsProp.groomInfo.first_name} {" "} {aboutDataAsProp.groomInfo.middle_name} {" "} {aboutDataAsProp.groomInfo.last_name}</h5>
                {/* ESCAPE HTML ENTITIES */}
                {/* https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js */}
                {/* <p className="card-text">{he.decode(aboutDataAsProp.groomInfo.description)}</p> */}
                <p className="card-text">{aboutDataAsProp.groomInfo.description}</p>
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={aboutDataAsProp.brideInfo.image_url} className="card-img" alt={aboutDataAsProp.brideInfo.first_name}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{aboutDataAsProp.brideInfo.first_name} {" "} {aboutDataAsProp.brideInfo.middle_name} {" "} {aboutDataAsProp.brideInfo.last_name}</h5>
                {/* ESCAPE HTML ENTITIES */}
                {/* https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js */}
                {/* <p className="card-text">{he.decode(aboutDataAsProp.brideInfo.description)}</p> */}
                <p className="card-text">{aboutDataAsProp.brideInfo.description}</p>
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
       </div>
}
     </div>
    );
  }
  
  
  
  export default About;