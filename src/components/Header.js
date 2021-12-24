import PropTypes from 'prop-types'

function Header({ textAsProp, displayTextAsProp, countAsProp, incrementAsProp, decrementAsProp }) {
  return (
    <>
     <h3>{textAsProp}</h3>
     <button onClick={() => displayTextAsProp()}>Show New Text</button>
     <br />
     <br />
     <br />
     <div>
     <button style={{ cursor: 'pointer' }} onClick={() => decrementAsProp()}>-</button>
     <button>{countAsProp}</button>
     <button style={{ cursor: 'pointer' }} onClick={() => incrementAsProp()}>+</button>
     </div>
    </>
  );
}

Header.propTypes = {
textAsProp: PropTypes.string.isRequired
}
// Header.defaultProps = {
// textAsProp: "I am a default Header component text"
// }

export default Header;