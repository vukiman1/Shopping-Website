import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../pages/Cart/cartSlice';
import userReducer from '../components/Form/Login/LoginForm/userSlice';

const rootReducer = {
    cart: cartReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
