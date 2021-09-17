import { User } from './../../../models/user';
import { createAction, props } from '@ngrx/store';
import { AuthPayload } from 'src/app/models/auth-payload';

export const loginAuth = createAction(
  '[Auth] login Auth',
  props<{data:AuthPayload}>()

);

export const loginAuthSuccess = createAction(
  '[Auth] login Auth Success',
  props<{ data: User }>()
);

export const loginAuthFailure = createAction(
  '[Auth] login Auth Failure',
  props<{ error:Error }>()
);
