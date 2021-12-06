// import Hero from '../utils/hero.jsx'
// import axios from 'axios'

// export default function BugReport(props) {
//   return <>
//     <Hero title="Bug Report" className="text-center">
//       <p className="text-3xl text-underline"> have you encountered a bug? let us know! </p>
// {/* 
//       <form action="https://jsonplaceholder.typicode.com/users" id="bug-report-form">
//         <label for="name">
//           Name:
//           <input type="text" name="name" id="first-name"></input>
//         </label>
//         <br/>
        
//         <label for="email">
//           Email:
//           <input type="text" name="email" id="email"></input>
//         </label>
//         <br/>

//         <label for="bug">
//           Bug:
//           <textarea id="bug" name="bug" rows="10" cols="50">
//             Enter the bug you have encountered
//           </textarea>
//         </label>
//         <br/>

//         <input type="submit" value="Create new user"></input> */}

//       {/* </form> */}

//     </Hero>
//   </>
// }

// // const bugreportForm = document.getElementById("bug-report-form");
// // bugreportForm.addEventListener("submit", handleFormSubmit);

// // async function handleFormSubmit(event) {
// //   event.preventDefault();
// //   const form = event.currentTarget;
// //   const url = form.action;

// //   try {
// //     const formData = new FormData(form);
// //     const responseData = await postFormDataAsJson({ url, formData });
// //     console.log({ responseData });

// // 	} catch (error) {
// // 		console.error(error);
// // 	}
// // }

// // async function postFormDataAsJson({ url, formData }) {
// //   const plainFormData = Object.fromEntries(formData.entries());
// // 	const formDataJsonString = JSON.stringify(plainFormData);

// //   const fetchOptions = {
// //     method: "POST",
// //     headers: {
// // 			"Content-Type": "application/json",
// // 			"Accept": "application/json"
// //     },
// //     body: formDataJsonString,
// // 	};
// //   const response = await fetch(url, fetchOptions);

// // 	if (!response.ok) {
// // 		const errorMessage = await response.text();
// // 		throw new Error(errorMessage);
// // 	}

// // 	return response.json();
// // }

// // const bodyParser = require("body-parser");

// // app.use(bodyParser.json());

// // app.post("/user", (request, response) => {

// // 	/**
// // 	 * In a real application, the data in `request.body` should
// // 	 * be validated before its used for anything e.g. inserting
// // 	 * into a database.
// // 	 */

// // 	const newUser = {
// // 		first_name: request.body.first_name,
// // 		last_name: request.body.last_name
// // 	};

// // 	response.status(201).json(newUser);
// // });

import Hero from '../utils/hero.jsx'
import {Link} from 'react-router-dom'

export default function BugReport(props) {
  return <>
        <Hero title="Bug Report">
          <h1 className="text-3xl text-center"> Welcome, teacher! </h1>

          <div className="action_menu">
            <Link to="/bug-report"> <button> Report the goddamn bug </button> </Link>
          </div>

        </Hero>
  </>
}