import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import Hero from '../utils/hero.jsx'
import Modal from '../utils/modal.js'

export default function Home(props) {
  return <>
        <Hero title="Proxy">
          {
            // Make this a nice landing page
          }
          <h2 className="text-3xl m-3 p-3 "> Proxy is a Modern-Day Attendance Management System. </h2>
          {
            // think of what else should go here
          }
        </Hero>
  </>
}
