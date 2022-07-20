import { createSlice } from '@reduxjs/toolkit';

export const footballSlice = createSlice({
  name: 'football',
  initialState: {
    // countries array
    countries: [],
    // matches array
    matchPairs: []
  },
  reducers: {
    handleAddCountry: (state, { payload }) => {
      // creating country object
      const country = {
        name: payload.input,
        id: Math.floor(Math.random() * 1000),
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        place: null
      }
      // adding country to state array
      state.countries.push(country)
      // creating match object - game between two teams
      if (state.countries.length > 0) {
        const match = state.countries.filter(country => country.name !== payload.input)
          .map(item => (
            {
              started: false,
              id: Math.floor(Math.random() * 1000),
              firstCountry: country,
              secondCountry: item,
              firstCountryScore: 0,
              secondCountryScore: 0,
              draw: false
            }
          ))
        // adding match object to matches state array and normalizing it
        state.matchPairs.push(match)
        state.matchPairs = state.matchPairs.flat()
      }
    },
    handleAddScore: (state, { payload }) => {
      // starting game with finding the match currently in play
      const match = state.matchPairs.find(pair => pair.id === payload.matchID)
      // changing match status for letting now the game was played
      match.started = true
      // adding scores of teams from inputs to match objects
      match.firstCountryScore = payload.score1
      match.secondCountryScore = payload.score2
      // detecting if the game went draw
      if (payload.score1 === payload.score2) {
        match.draw = true
      }
      // looking for teams who just played in the main countries state array
      const firstCountry = state.countries.find(con => con.id === match.firstCountry.id)
      const secondCountry = state.countries.find(con => con.id === match.secondCountry.id)
      // changing data of country object according to game results
      if (match.started) {
        firstCountry.played +=1
        secondCountry.played += 1
      }
      // adding draws
      if (match.draw) {
        firstCountry.draw += 1
        secondCountry.draw += 1
      }
      // adding wins, looses and points
      if (match.firstCountryScore > match.secondCountryScore) {
        firstCountry.win += 1
        firstCountry.points += 3
        secondCountry.lost += 1
      } else if (match.firstCountryScore < match.secondCountryScore) {
        secondCountry.win += 1
        secondCountry.points += 3
        firstCountry.lost += 1
      }
      // finally, detecting the first place team with sort function
      const sortFn = (a, b) => {
        const conA = Number(a.points)
        const conB = Number(b.points)

        if (conA > conB) return -1
        if (conB > conA) return 1

        return 0
      }
      // sorting countries state array according to totalpoints
      state.countries = state.countries.sort(sortFn)
    },
  }
})

export const { handleAddCountry, handleAddScore } = footballSlice.actions

export default footballSlice.reducer