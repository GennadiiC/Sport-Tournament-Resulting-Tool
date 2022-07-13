import { useSelector } from "react-redux";

export function Table () {

  const { countries } = useSelector((state) => state.football)

  return (
    <div>
      {console.log(countries)}
      <form className="form">
        <input className="inpt" />
        <button className="btn" type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Team</th>
            <th>Played</th>
            <th>Win</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        {countries.map((country, i) => 
          <tr key={i + 1}>
            <th>{}</th> 
            <th>{country.name}</th>
            <th>{country.played}</th>
            <th>{country.win}</th>
            <th>{country.draw}</th>
            <th>{country.lost}</th>
            <th>{country.points}</th>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}