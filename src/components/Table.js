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
      <h2>Scores:</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          className="inpt" 
          id="inpt"
          autoComplete="off"
          {...register('country')}
        />
        <button className="btn" type="submit" id="btn" onClick={handleSubmit(onSubmit)}>Add</button>
        <label htmlFor="btn" className="p">(Add country)</label>
      </form>
      {
        countries.length > 0 ?
        <div className="table">
          <div className="tHead">
            <div>Place</div>
            <div>Team</div>
            <div>Played</div>
            <div>Win</div>
            <div>Draw</div>
            <div>Lost</div>
            <div>Points</div>
          </div>
          {countries.map((country, i) => 
            <div className="tBody" key={i + 1}>
              <div>{i + 1}</div> 
              <div>{country.name}</div>
              <div>{country.played}</div>
              <div>{country.win}</div>
              <div>{country.draw}</div>
              <div>{country.lost}</div>
              <div>{country.points}</div>
            </div>
          )}
        </div> :
        null
      }
      
    </div>
  )
}