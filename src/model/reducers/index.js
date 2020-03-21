import { createBrowserHistory } from 'history';
import { applyMiddleWare, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logicMiddleware from '../../logic';
import createRootReducer from './utils';

export const history = createBrowserHistory();

const configureStore = preloadedState => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleWare(routerMiddleware(history), logicMiddleware)
        )
    )

    return store;
}
export default configureStore;