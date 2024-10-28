import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({// setup the Redux store.
    reducer: {
        cart: cartReducer,//the reducer key specifies the reducer functions
    },
});
export default store //export default store;, so it can be used throughout the application to manage state.
