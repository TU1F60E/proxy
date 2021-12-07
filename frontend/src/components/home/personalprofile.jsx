import Hero from '../utils/hero.jsx'

export default function PersonalProfile(props) {
  return <>
    <Hero title="My TimeTable">
      {/* <h5 className="text-4xl text-center font-bold p-5 my-5"> Semester 3 Section A TimeTable </h5> */}

      <div>
      <table align = "center">
        <tr>
            <th>Day</th>
            <th>Lecture 1</th>
            <th>Lecture 2</th>
            <th>        </th>
            <th>Lecture 3</th>
            <th>Lecture 4</th>
            <th>        </th>
            <th>Lecture 5</th>
            <th>Lecture 6</th>
            <th>        </th>
            <th>Lecture 7</th>
        </tr>
        
        <tr>
            <td>Timings</td>
            <td>8:15-9:15</td>
            <td>9:15-10:15</td>
            <td rowspan="7">BREAK </td>
            <td>10:45-11:45</td>
            <td>11:45-12:45</td>
            <td rowspan="7">LUNCH</td>
            <td>1:30-2:30</td>
            <td>2:30-3:30</td>
            <td rowspan="7">BREAK</td>
            <td>3:45-4:45</td>
        </tr>
        <tr>
                <td>Monday</td>
                <td bgcolor="#ADB2D3">DDCO</td>
                <td bgcolor="#594F3B">SDS</td>
                <td colspan="2" bgcolor="#9C7CA5">DDCO-Lab</td>
                <td bgcolor="#896279">DS</td>
                <td bgcolor="#9C7CA5">WT</td>
                <td></td>
            </tr>

            <tr>
                <td>Tuesday</td>
                <td colspan="2" bgcolor="#9C7CA5">DS-Lab</td>
                <td bgcolor="#594F3B">SDS</td>
                <td bgcolor="#8D7468">AFLL</td>

                <td bgcolor="#ADB2D3">DDCO</td>
                <td bgcolor="#896279">DS</td>
                <td bgcolor="#8D7468">AFLL</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td bgcolor="#9C7CA5">WT</td>
                <td bgcolor="#896279">DS</td>
                <td bgcolor="#ADB2D3">DDCO</td>
                <td bgcolor="#8D7468">AFLL</td>
                <td bgcolor="#9C7CA5">WT</td>
                <td bgcolor="#ADB2D3">DDCO</td>
                <td></td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td bgcolor="#8D7468">AFLL</td>
                <td bgcolor="#896279">DS</td>
                <td bgcolor="#9C7CA5">WT</td>
                <td bgcolor="#ADB2D3">DDCO</td>
                <td bgcolor="#8D7468">AFLL</td>
                <td bgcolor="#594F3B">SDS</td>
                <td></td>
            </tr>
            <tr>
                <td>Friday</td>
                <td colspan="2" bgcolor="#594F3B">SDS</td>
                <td bgcolor="#9C7CA5">WT</td>
                <td bgcolor="#896279">DS</td>
                <td></td>
                <td bgcolor="#936F8F">UNIX</td>
                <td bgcolor="#936F8F">UNIX</td>
            </tr>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>

    </Hero>
  </>
}
