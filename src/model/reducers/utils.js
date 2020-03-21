import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import reducers from './reducers';

export const createReducer = (INITIAL_STATE, handlers, key) => {
    (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    return handlers[type] ? handlers[type](state, payload || action) : state;
};

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    ...reducers
});
}
export default createRootReducer;