import { createReducer, on } from '@ngrx/store';
import { addItemToCart, removeItemFromCart } from './cart.actions';
// initialState => state'in başlangıç hali

const initialState: any[] = [];

export const cartReducer = createReducer(
  initialState,
  on(removeItemFromCart, (state, action) => {
    return state.filter((i) => i.id !== action.id);
  }),
  on(addItemToCart, (state, action) => {
    return state;
  })
);

// Javascript TIP üç eşittir
// "1"==1 // true
// "1"===1 // false
