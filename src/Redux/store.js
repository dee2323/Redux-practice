import { createStore } from 'redux'
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    const { type } = action;
    switch (type) {
        case 'increment': return { ...state, counter: state.counter + 1 }
        case 'decrement': return { ...state, counter: state.counter - 1 }
        case 'incrementBy5': return { ...state, counter: state.counter + action.amount }
        case 'hideCounter': return { ...state, showCounter: !state.showCounter }
        default: return state;
    }
}
export const store = createStore(counterReducer)
