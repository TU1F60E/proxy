import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyNavbar() {
	return (
		<>
			<nav class="bg-white shadow nav">
				<div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
					<div class="lg:flex lg:items-center">
						<div class="flex items-center justify-between">
							<div>
								<Link
									className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
									to="/"
								>
									<img
										className="navbarLogo"
										src="pro_dark_blue_navbar.png"
										height="10px"
										alt="logo"
									/>
								</Link>
							</div>

							<div class="flex lg:hidden">
								<button
									type="button"
									class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
									aria-label="toggle menu"
								>
									<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
										<path
											fill-rule="evenodd"
											d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
										></path>
									</svg>
								</button>
							</div>
						</div>

        <div class="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center sm:hidden">
							<Link to="/login" className="navbar-link-item">
								<FontAwesomeIcon icon="check-square" /> {' '} Login
							</Link>
							<Link to="/student" className="navbar-link-item">
								<FontAwesomeIcon icon="user-graduate"/> Student
							</Link>
							<Link to="/teacher" className="navbar-link-item">
								<FontAwesomeIcon icon="school"/> Teacher
							</Link>
							<Link to="/timetable" className="navbar-link-item">
								<FontAwesomeIcon icon="calendar"/> Timetable
							</Link>
							<Link to="/bugreport" className="navbar-link-item">
								<FontAwesomeIcon icon="bug"/> Report a Bug
							</Link>
							<Link to="/aboutus" className="navbar-link-item">
								<FontAwesomeIcon icon="info-circle"/> About Us
							</Link>
							<Link to="/me" className="navbar-link-item">
								<FontAwesomeIcon icon="user"/> Personal Profile
							</Link>
							<div class="flex items-center mt-4 md:mt-0">
								<button
									type="button"
									class="flex items-center focus:outline-none"
									aria-label="toggle profile dropdown"
								>
									<div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
										<img
											src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
											class="object-cover w-full h-full"
											alt="avatar"
										/>
									</div>
									<h3 class="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
										Khatab wedar
									</h3>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
