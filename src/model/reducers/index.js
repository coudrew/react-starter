import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logicMiddleware from '../../logic';
import { createRootReducer } from './utils';
import reducers from './reducers';

export const history = createBrowserHistory();
const composeEnhancers =
	(window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
const configureStore = preloadedState => {
	const store = createStore(
		createRootReducer(reducers, history),
		preloadedState,
		composeEnhancers(
			applyMiddleware(routerMiddleware(history), logicMiddleware)
		)
	);

	return store;
};
export default configureStore;
