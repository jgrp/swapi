import { createReducer, on } from '@ngrx/store';
import * as PeopleActions from './people.actions';
import { IPerson } from '../types';

export interface PeopleState {
  people: IPerson[];
  error: string | null;
  searchResults: IPerson[] | null;
  loading: boolean;
}

const initialState: PeopleState = {
  people: [],
  error: null,
  searchResults: null,
  loading: false,
};

export const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.loadPeople, (state) => ({
    ...state,
    loading: true,
  })),
  on(PeopleActions.loadPeopleSuccess, (state, {people}) => ({
    ...state,
    loading: false,
    people: people.map((person, index) => ({
      ...person,
      id: index,
    })),
    error: null,
  })),
  on(PeopleActions.loadPeopleFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error,
  })),
  on(PeopleActions.addPerson, (state, {person}) => ({
    ...state,
    people: [...state.people, {...person, id: state.people.length}],
  })),
  on(PeopleActions.removePerson, (state, {personId}) => ({
    ...state,
    people: state.people.filter((p) => p.id !== personId),
  })),
);
