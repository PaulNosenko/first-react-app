import shortid from "shortid";
import strContains from "../utils/strContains";

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

//selectors
export const getFilteredCards = ({ searchedCardPhrase, cards }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchedCardPhrase));

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite);

//actions
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

//reducer
const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

export default cardsReducer;