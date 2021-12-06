import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';

// use this to parse the state object to get the bit of state we care about
const getUsers = state => state.users

export default function Auth(props) {

  return <>
  <div className="hero">
    <div className="hero-info">
      <h3 className="hero-text"> Users </h3>
        <div className="btncontainer sm:flex-col">
            <button className="hero-button login-button">
              Create <FontAwesomeIcon icon="arrow-right" />
            </button>
        </div>
    </div>
  </div>
  </>

}
