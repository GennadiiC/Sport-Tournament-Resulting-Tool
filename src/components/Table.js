import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleAddCountry } from "../redux/footballSlice";

export function Table () {

  const { countries } = useSelector((state) => state.football)
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()


  const onSubmit = (value) => {
    dispatch(handleAddCountry({ input: value.country }))
    reset()
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          className="inpt" 
          {...register('country')}
        />
        <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>Add</button>
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
            <th>{i + 1}</th> 
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