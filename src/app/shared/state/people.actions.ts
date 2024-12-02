import { createAction, props } from '@ngrx/store';
import { IPeople } from '../types';

// Load People
export const loadPeople = createAction('[People] Load People');
export const loadPeopleSuccess = createAction(
  '[People] Load People Success',
  props<{ people: IPeople[] }>()
);
export const loadPeopleFailure = createAction(
  '[People] Load People Failure',
  props<{ error: string }>()
);

// Add Person
export const addPerson = createAction(
  '[People] Add Person',
  props<{ person: IPeople }>()
);

// Remove Person
export const removePerson = createAction(
  '[People] Remove Person',
  props<{ personId: number }>()
);

// Search Person
export const searchPerson = createAction(
  '[People] Search Person',
  props<{ searchTerm: string }>()
);
