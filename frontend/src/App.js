import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
	faCheckSquare, 
	faCoffee,
	faShieldAlt,
	faUserGraduate,
	faSchool,
	faBug,
	faInfoCircle,
	faUser,
    faCalendarAlt,
	faCalendar,
    faArrowRight,
	faHome,

} from '@fortawesome/free-solid-svg-icons'



// import all our components
import Home from './components/home/index.jsx'
import Attendance from './components/attendance/index.jsx'
import Auth from './components/auth/index.jsx'
import Student from './components/home/student'
import Teacher from './components/home/teacher'
import Timetable from './components/timetable/index.jsx'
import BugReport from './components/bugreport/index.jsx'
import PersonalProfile from './components/home/personalprofile.jsx'
import AboutUs from './components/utils/aboutus.jsx'

import MyNavbar from './components/utils/navbar.jsx'

library.add(
	faCheckSquare, 
	faCoffee,
	faShieldAlt,
	faUserGraduate,
	faSchool,
	faBug,
	faInfoCircle,
	faUser,
	faCalendarAlt,
	faCalendar,
	faArrowRight,
	faHome,
)

function App() {
  return (
		<>
			<Router className="App min-h-screen">
				<MyNavbar />
				<Switch className="AppContent">
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/attendance" exact>
						<Attendance />
					</Route>
					<Route path="/login">
						<Auth />
					</Route>
					<Route path="/student" exact>
						<Student />
					</Route>
					<Route path="/teacher" exact>
						<Teacher />
					</Route>
					<Route path="/timetable" exact>
						<Timetable />
					</Route>
					<Route path="/me" exact>
						<PersonalProfile />
					</Route>
					<Route path="/bugreport" exact>
						<BugReport />
					</Route>
					<Route path="/aboutus" exact>
						<AboutUs />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
