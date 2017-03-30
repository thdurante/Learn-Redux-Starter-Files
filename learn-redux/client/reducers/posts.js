/*
 * A reducer takes in two things:
 *
 * 1- The action (info about what happened)
 * 2- Copy of the current state
 *
 * */

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            /*
             * Redux works with pure functions, that doesn't change external components (causing side effects), like the state in this case.
             * Instead, a copy of the state is created, altered, and then returned.
             * */
            const index = action.index;
            return [
                ...state.slice(0,index),                            // Before the item being updated - Simple copy of the elements
                {...state[index], likes: state[index].likes + 1},   // The item being updated - Change the element
                ...state.slice(index + 1)                           // After the item being updated - Simple copy of the elements
            ];
        default:
            return state;
    }
}

export default posts;
