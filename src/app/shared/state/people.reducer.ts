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


function extractID(url: string | undefined): string | undefined {
  if (!url) return undefined;
  const parts = url.split('/');
  return parts.pop() ?? '';
}


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
      id: extractID(person?.url),
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
    // Add new person to state with internal ID, to load details from state
    people: [...state.people, {...person, id: 'i' + (state.people.length + 1)}],
  })),
  on(PeopleActions.removePerson, (state, {personId}) => ({
    ...state,
    people: state.people.filter((p) => p.id !== personId),
  })),
  on(PeopleActions.searchPerson, (state, {searchTerm}) => ({
    ...state,
    searchResults: state.people.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }))
);
