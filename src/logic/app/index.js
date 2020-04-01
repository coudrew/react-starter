import { createLogic } from 'redux-logic';
import { push } from 'connected-react-router';
import { SET_LOADING, SET_LOADED, NAVIGATE_TO } from '../../model/actions/app';
import { asyncLogic } from '../utils';

const pageLoad = createLogic({
	type: '@@router/LOCATION_CHANGE',
	process({ action: { payload } }, dispatch, done) {
		const {
			location: { pathname }
		} = payload;

		dispatch({
			type: SET_LOADING,
			payload: { setLoading: pathname }
		});
		return asyncLogic(loadPage)
			.then(f => {
				setTimeout(() => {
					dispatch({
						type: SET_LOADED,
						payload: { setFinishedLoading: pathname }
					}),
						done();
				}, 3000);
			})
			.catch(e => done(e));
	}
});

const loadPage = (resolve, reject) => {
	const foo = 'foo';
	resolve(foo);
};

const navigateTo = createLogic({
	type: NAVIGATE_TO,
	process({ action }, dispatch, done) {
		const {
			payload: { path }
		} = action;
		dispatch({
			type: SET_LOADING,
			payload: { setLoading: path }
		});
		return Promise.resolve().then(() => {
			dispatch(push(path));
			done();
		});
	}
});
export { pageLoad, navigateTo };
