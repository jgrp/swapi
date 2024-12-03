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

export const addPerson = createAction(
  '[People] Add Person',
  props<{ person: IPerson }>()
);

export const removePerson = createAction(
  '[People] Remove Person',
  props<{ personId: number }>()
);
