import PropTypes from 'prop-types'
function Header({ textAsProp, displayTextAsProp }) {
  return (
    <>
     <h3>{textAsProp}</h3>
     <button onClick={() => displayTextAsProp()}>Show New Text</button>
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