import { createSlice } from '@reduxjs/toolkit';

export const footballSlice = createSlice({
  name: 'football',
  initialState: {
    countries: [
      {
        name: 'Greece',
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        totalPoints: 0
      },
      {
        name: 'Argentina',
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        totalPoints: 0
      },
      {
        name: 'Germany',
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        totalPoints: 0
      },
      {
        name: 'Italy',
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
        totalPoints: 0
      },
    ]
  }
})

export default footballSlice.reducer