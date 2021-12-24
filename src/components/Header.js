import PropTypes from 'prop-types'

function Header({ textAsProp, displayTextAsProp, countAsProp, incrementAsProp, decrementAsProp }) {
  return (
    <>
    <h2>Header static content</h2>
     <h3>{textAsProp}</h3>
     <button onClick={() => displayTextAsProp()}>{textAsProp === 'Sending this as prop to header component' ? 'Show New Text' : 'Show Old Text'}</button>
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