import shortid from "shortid";

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//selectors
export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
}

export default columnsReducer;