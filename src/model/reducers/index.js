import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logicMiddleware from '../../logic';
import { createRootReducer } from './utils';
import reducers from './reducers';

export const history = createBrowserHistory();

const configureStore = preloadedState => {
	const store = createStore(
		createRootReducer(reducers, history),
		preloadedState,
		compose(applyMiddleware(routerMiddleware(history), logicMiddleware))
	);

	return store;
};
export default configureStore;
