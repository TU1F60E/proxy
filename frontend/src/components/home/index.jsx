import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(props) {
  return <>
  <div class="hero">
    <img className="text-center hero-image" src="Pro.png" alt="logo"></img>
    <div className="hero-info">
      <h3 className="hero-text"> The Modern-Day Attendance Management Solution. </h3>
      <div className="btncontainer">
        <button className="hero-button login-button">
          Login <FontAwesomeIcon icon="arrow-right" />
        </button>
        <button className="hero-button register-button">
          Sign Up <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
  </>
}
