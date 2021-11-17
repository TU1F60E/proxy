// user slice - complete representation of the user in React's internal state
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, name: "Ani"}
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        // we write our mutating code here
        userAdded(state, action) {
            // thank you, immer
            state.push(action.payload)
        },

    }
})

export const { userAdded } = userSlice.actions
export default userSlice.reducer
