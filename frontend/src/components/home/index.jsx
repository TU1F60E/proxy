import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Hero from '../utils/hero.jsx'
import Modal from '../utils/modal.js'

export default function Home(props) {
  return <>
    <Hero title="Proxy">
      {
        // Make this a nice landing page
      }
      <h2 className="text-3xl m-3 p-3 "> Proxy is a Modern-Day Attendance Management System. </h2>
      {/* <div style="text-align:center;"> */}

      {/* <style>
        svg {
          display: block;
        margin-left: auto;
        margin-right: auto;
}
      </style> */}

      {/* .container {display: flex;   justify-content: center; } */}

      <svg class width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
          {/* //className="h-70" */}
        {/* <svg class="h-70 w-70" viewBox="0 0 5 5"> */}
        <image href="logo_darkblue.png" height="200" width="200" />
      </svg>

    </Hero>
  </>
}
