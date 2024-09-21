import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const product = action.payload;
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }
        },

        delItem(state, action) {
            const product = action.payload;
            const delItem = state.find((x) => x.id === product.id);
            if (delItem.qty === 1) {
                return state.filter((x) => x.id !== product.id);
            } else {
                return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
            }
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addItem, delItem } = actions;
export default cartSlice.reducer;
