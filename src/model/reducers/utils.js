import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createReducer = (INITIAL_STATE, handlers, key) => {
	(state = INITIAL_STATE, action) => {
		const { type, payload } = action;
		return handlers[type]
			? handlers[type](state, payload || action)
			: state;
	};
};

const createRootReducer = (reducers, history) =>
	combineReducers({
		router: connectRouter(history),
		...reducers
	});

export { createReducer, createRootReducer };
// export default createRootReducer;
