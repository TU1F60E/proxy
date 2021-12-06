import {Link} from 'react-router-dom'
import Hero from '../utils/hero.jsx'

export default function Student(props) {
  return <>
        <Hero title="Student">

          <div className="action_menu">
            <Link to="/student_attendance"> <button> Give Attendance </button> </Link>
          </div>

        </Hero>
  </>
}
