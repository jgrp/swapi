import { createAction, props } from '@ngrx/store';
import { IPerson } from '../types';

// Load People
export const loadPeople = createAction('[People] Load People');
export const loadPeopleSuccess = createAction(
  '[People] Load People Success',
  props<{ people: IPerson[] }>()
);
export const loadPeopleFailure = createAction(
  '[People] Load People Failure',
  props<{ error: string }>()
);

// Add Person
export const addPerson = createAction(
  '[People] Add Person',
  props<{ person: IPerson }>()
);

// Remove Person
export const removePerson = createAction(
  '[People] Remove Person',
  props<{ personId: string }>()
);

// Search Person
export const searchPerson = createAction(
  '[People] Search Person',
  props<{ searchTerm: string }>()
);
