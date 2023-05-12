import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './slices/profiles'

/*const store = configureStore({
    reducer: {},
})

export default store*/
export const store = configureStore({
    reducer: {
        profiles: profileReducer
    }
})