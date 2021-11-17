import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';

// use this to parse the state object to get the bit of state we care about
const getUsers = state => state.users

export default function Auth(props) {

  const users = useSelector(getUsers);

  return <>
  <div class="hero">
    <div className="hero-info">
      <h3 className="hero-text"> Users </h3>
        <div className="btncontainer sm:flex-col">
            <button className="hero-button login-button">
              Create <FontAwesomeIcon icon="arrow-right" />
            </button>
        </div>
      <ul>
      {users && users.map(user => {
        return <li key={user.id}> {user.name} hi </li>
      })}
      </ul>
    </div>
  </div>
  </>

}
