import { authFeatureKey } from './../../reducers/auth/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import *as fromAuth from '../../reducers/auth/auth.reducer'
import { AppState } from '../..';


const authFeatureSelector = createFeatureSelector<AppState, fromAuth.State>(fromAuth.authFeatureKey);

export const loggedInUserSelector = createSelector(authFeatureSelector, (authState) => {
    return authState.loggedInUser
}
)