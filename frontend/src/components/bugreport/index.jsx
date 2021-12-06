// import Hero from '../utils/hero.jsx'

// export default function BugReport(props) {
//   return <>
//     <Hero title="Bug Report" className="text-center">
//     <p className="text-3xl text-underline"> have you encountered a bug? let us know! </p>
//     </Hero>
//   </>
// }

import Hero from '../utils/hero.jsx'
import {Link} from 'react-router-dom'

export default function BugReport(props) {
  return <>
        <Hero title="Report the issue faced">
          <h1 className="text-3xl text-center"> Welcome, teacher! </h1>

          <div className="action_menu">
            <Link to="/bug-report"> <button> Report the goddamn bug </button> </Link>
          </div>

        </Hero>
  </>
}
