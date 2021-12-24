function Footer({ countAsProp, incrementAsProp, decrementAsProp }) {
  return (
    <div style={{ marginTop: 40 }}>
    <h2>Footer static content</h2>
     <div>
     <button style={{ cursor: 'pointer' }} onClick={() => decrementAsProp()}>-</button>
     <button>{countAsProp}</button>
     <button style={{ cursor: 'pointer' }} onClick={() => incrementAsProp()}>+</button>
     </div>
    </div>
  );
}



export default Footer;