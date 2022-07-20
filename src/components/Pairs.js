import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleAddScore } from "../redux/footballSlice";

const FormScore = ({ matchID }) => {

  const { register, handleSubmit, reset } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(handleAddScore({ matchID, score1: data.score1, score2: data.score2 }))
    reset()
  }

  return (
    <form className="inpWrap" onSubmit={handleSubmit(onSubmit)}>
      <input type='text' className="dataInp" {...register('score1')} autoComplete="off" />
        <div className="semi">:</div>
      <input type='text' className="dataInp" {...register('score2')} autoComplete="off" />
      {/* disabled input for onSubmit function be able to work */}
      <input type='submit' className="dis"/>
    </form>
  )
}


const ScorePair = ({ firstCountryScore, secondCountryScore }) => {
  return (
    <div className="inpWrap">
      <div className="dataInp">{firstCountryScore}</div>
      <div className="semi">:</div>
      <div className="dataInp">{secondCountryScore}</div>
    </div>
  )
}

export const Pairs = () => {

  const { countries, matchPairs } = useSelector((state) => state.football)

  return (
    <div className='pairs'>
      {console.log(countries)}
      {
        matchPairs.length > 0 ?
        matchPairs.map((item, i) => 
          
          <div className="pairWrap" key={i + 1}>
            <div className="textWrap1">
              {item.firstCountry.name}
            </div>
            
            {
              !item.started ? 
              <FormScore  
                matchID={item.id}
              /> :
              <ScorePair 
                firstCountryScore={item.firstCountryScore}
                secondCountryScore={item.secondCountryScore}
              />
            }
            
            <div className="textWrap2">
              {item.secondCountry.name}
            </div>
          </div> 
        ) :
        null
      }
    </div>
  )
}