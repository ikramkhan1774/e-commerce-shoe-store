import { configureStore, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Current User Slice
const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
    },
});

// Cart Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cart.find((item) => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity += 1;
                toast.success("Quantity Updated");
            } else {
                action.payload.quantity = 1;
                state.cart.push(action.payload);
            }
        },
        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find((item) => item._id === id);
            if (item) {
                item.quantity = quantity;
                // toast.success("Quantity Updated");
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

// Exporting all actions
export const { addItem, removeItem, clearCart, changeQuantity } = cartSlice.actions;
export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

// Store Configurations 
const Store = configureStore({
    reducer: {
        currentUser: currentUserSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default Store;
