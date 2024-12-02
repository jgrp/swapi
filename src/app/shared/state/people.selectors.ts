import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from './people.reducer';

export const selectPeopleState = createFeatureSelector<PeopleState>('people');

export const selectAllPeople = createSelector(
  selectPeopleState,
  (state) => state.people
);

export const selectLoading = createSelector(
  selectPeopleState,
  (state) => state.loading
);
