import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';

const initialState = { isAuthenticated: false };

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return { isAuthenticated: true, user: action };
  })
);

// state (1. parametre) => fonksiyona girildiği anda state'in kendisi
// action (2. parametre) => fonksiyona gönderilen parametreler
