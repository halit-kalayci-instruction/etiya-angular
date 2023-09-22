import { createAction, props } from '@ngrx/store';
import { LoginResponseModel } from '../../models/loginResponseModel';

// Statedeki aksiyonlar birbirinden ayrılmalı
export const isAuthenticated = createAction('[Auth] IsAuthenticated');
export const login = createAction('[Auth] Login', props<LoginResponseModel>()); // => ngRx'e aksiyon tanımlama
