import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Hero from '../utils/hero.jsx'
import Modal from '../utils/modal.js'

export default function Home(props) {
  return <>
    <Hero title="Proxy">
      <h2 className="text-3xl m-3 p-3 "> Proxy is a Modern-Day Attendance Management System. </h2>

      <p>
        Get added to a class...
        Give your attendance...
        Track your attendance...
      </p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat possimus dolores itaque? Tenetur molestias ad minus<br/> optio, ipsum nemo voluptatum necessitatibus assumenda eum maxime, totam ea minima aliquid asperiores.</p>

      <div class="main">
        <div><img src="browser.svg" /></div>
        <div>
          <br/>
          <br/>
          <h1 className="text-3x m-3 p-3">
             Hi hello! this is testing for flex wrap property.<br/>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus explicabo rerum quasi, ipsum totam! Pariatur,<br/> nesciunt! Assumenda laborum numquam illo beatae, nisi, et autem ab, quisquam quam maiores nihil.<br/>
          </h1>
          </div>
          {/* <div><img src="study.svg" /></div> */}
      </div>

    </Hero>
  </>
}