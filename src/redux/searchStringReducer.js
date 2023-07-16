const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHED_CARD_PHRASE = createActionName('UPDATE_SEARCHED_CARD_PHRASE');

export const updatedSearchedCardPhrase = payload => ({ type: UPDATE_SEARCHED_CARD_PHRASE, payload });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHED_CARD_PHRASE:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;