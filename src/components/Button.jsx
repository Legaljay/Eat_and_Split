import PropTypes from 'prop-types'

export default function Button({setfunction,children}) {
  return (
    <button className='button' onClick={setfunction}>{children}</button>
  )
}
Button.propTypes = {
    children : PropTypes.string,
    setfunction: PropTypes.func
}