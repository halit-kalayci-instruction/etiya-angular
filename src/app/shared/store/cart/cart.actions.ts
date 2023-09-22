import { createAction, props } from '@ngrx/store';

export const addItemToCart = createAction('[Cart] AddItemToCart');

export const removeItemFromCart = createAction(
  '[Cart] RemoveItemFromCart',
  props<{ id: number }>() // action'ın ta kendisi
);
