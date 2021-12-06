import Hero from '../utils/hero.jsx'
import {Link} from 'react-router-dom'

export default function Teacher(props) {
  return <>
        <Hero title="Teacher">
          <h1 className="text-3xl text-center"> Welcome, teacher! </h1>

          <div className="action_menu">
            <Link to="/teacher_attendance"> <button> Start Attendance Session </button> </Link>
            <Link to="/studentmanager"> <button> Manage Students </button> </Link>
            <Link to="/classmanager"> <button> Manage Classes </button> </Link>
          </div>

        </Hero>
  </>
}
