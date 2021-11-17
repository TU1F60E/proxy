// redux store.
import { configureStore } from '@reduxjs/toolkit';
// get the user reducer
import userReducer from './features/users/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;
