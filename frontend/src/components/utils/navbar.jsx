import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyNavbar() {
  // TODO make the navbar responsive PLEASE
	return (
		<>
			<nav className="bg-blue-500 shadow-lg nav flex md:flex-row lg:flex-row flex-col w-screen p-1 ">
				<a href="/" className="md:w-1/5 lg:w-1/5 flex">
					<img
						alt="logo"
						src="pro_dark_blue_navbar.png"
						className="object-contain h-full mx-auto"
					/>
				</a>

				<div className="navbar-links flex md:flex-row lg:flex-row flex-col w-3/5 self-center sm:flex-col mx-3">
					<div className="nav-link flex-1">
						<Link to="/student">
							<FontAwesomeIcon icon="home" /> Student{" "}
						</Link>
					</div>
					<div className="nav-link flex-1">
						<Link to="/teacher">
							<FontAwesomeIcon icon="home" /> Teacher{" "}
						</Link>
					</div>
					<div className="nav-link flex-1">
						<Link to="/attendance">
							{" "}
							<FontAwesomeIcon className="nav-icon" icon="check-square" />{" "}
							Attendance{" "}
						</Link>
					</div>
					<div className="nav-link flex-1">
						<Link to="/bugreport">
							{" "}
							<FontAwesomeIcon className="nav-icon" icon="check-square" /> Bug
							Report{" "}
						</Link>
					</div>
				</div>

				<div className="navbar-end self-center text-xl p-5 rounded w-1/5 flex">
					<span className="mx-auto bg-transparent border-b-4 border-red-700 m-3 p-3">
						<Link to="/me">
							<FontAwesomeIcon icon="user" /> My Profile
						</Link>
					</span>
				</div>
			</nav>
		</>
	);
}
