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
    faPlusCircle,

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
import StudentManager from './components/home/student_manager.js'
import ClassManager from './components/home/class_manager.js'
import BugManager from './components/bugreport/bug_manager.js'
import TeacherAttendanceControl from './components/home/teacher_attendance.jsx'

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
	faPlusCircle,
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
						<Auth /> </Route> <Route path="/student" exact>
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
					<Route path="/bug-report" exact>
						<BugManager />
					</Route>
					<Route path="/aboutus" exact>
						<AboutUs />
					</Route>
					<Route path="/studentmanager" exact>
						<StudentManager />
					</Route>
					<Route path="/classmanager" exact>
						<ClassManager />
					</Route>
					<Route path="/teacher_attendance" exact>
						<TeacherAttendanceControl />
					</Route>
					<Route path="/student_attendance" exact>
						<h1> Student Attendance Starter </h1>
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
