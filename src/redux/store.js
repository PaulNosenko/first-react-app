import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({searchedCardPhrase, cards}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchedCardPhrase));

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);

export const getAllLists = (state) => state.lists;

export const getAllColumns = (state) => state.columns; 

export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updatedSearchedCardPhrase = payload => ({ type: 'UPDATE_SEARCHED_CARD_PHRASE', payload });

//reducer
const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_COLUMN': {
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }]
      }
    }
    case 'ADD_CARD': {
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }]
      }
    }
    case 'UPDATE_SEARCHED_CARD_PHRASE': {
      return {
        ...state,
        searchedCardPhrase: action.payload
      }
    }
  }

  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;