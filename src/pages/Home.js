import { useNavigate } from 'react-router';
// import { useNavigate, useLocation } from 'react-router';

function Home({ aboutDataAsProp, isLoadingAsProp }) {
  console.log('On home page')
  console.log(aboutDataAsProp)

  // NAVIGATE TO ANOTHER PAGE
  // https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
  let navigate = useNavigate();

  // DISPLAY DATE FROM ANOTHER PAGE AFTER LEAVING THAT PAGE
  // https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
  // let location = useLocation();

  const goToAnotherPage = () => {
    navigate('about')
    // navigate('about', { state: { greeting: 'Hello There!!!', response: 'We Love you!!!'} })
  }
    return (
      <div style={{ marginTop: 40 }}>
       <h1 className="mb-3">Welcome our Dear Friend</h1>
       <h3 className="mb-5">We're cordially inviting you to the matrimonial ceremony of</h3>
       {/* {
         location.state !== null ?
         <div class="alert alert-success" role="alert">
           {location.state.success}
         </div> : null
       } */}
       {/* {
         (location.state !== undefined || location.state !== null) ?
         <div class="alert alert-success" role="alert">
           {location.state.dataFromRegisteredUser.message }
         </div> : null
       } */}
       {
         isLoadingAsProp ? <h1 className="text-center text-danger">Loading...</h1>
         : 
      <div className="container">
       <div className="row">
        <div className="col-md-6">
       <div className="card" style={{width: '24rem'}}>
       <img src={aboutDataAsProp.groomInfo.image_url} className="card-img" alt={aboutDataAsProp.groomInfo.first_name}/>
       <div className="card-body">
        <h5 className="card-title">{aboutDataAsProp.groomInfo.first_name}</h5>
      </div>
      </div>
      </div>

        <div className="col-md-6">
       <div className="card" style={{width: '24rem'}}>
       <img src={aboutDataAsProp.brideInfo.image_url} className="card-img" alt={aboutDataAsProp.brideInfo.first_name}/>
       <div className="card-body">
        <h5 className="card-title">{aboutDataAsProp.brideInfo.first_name}</h5>
      </div>
      </div>
      </div>
      </div>
       <div className="text-center">
       <button onClick={() => { goToAnotherPage() }} className="btn btn-primary">
          Read About
        </button>
       </div>
      </div>
       }
        

      </div>
    );
  }
  
  
  
  export default Home;