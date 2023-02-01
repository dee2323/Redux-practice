import { configureStore } from '@reduxjs/toolkit'
import { counter } from './slices/counterSlice'
import { auth } from './slices/authSlice';

export const store = configureStore({
    reducer: {
        counter,
        auth,

    }
})
