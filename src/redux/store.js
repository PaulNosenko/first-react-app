import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

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
    case 'UPDATE_CARD_SEARCHED_PHRASE': {
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