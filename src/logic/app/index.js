import { createLogic } from 'redux-logic';
import { push } from 'connected-react-router';
import { SET_LOADING, SET_LOADED, NAVIGATE_TO } from '../../model/actions/app';
import { asyncLogic } from '../utils';
import { SET_PAGE_DATA } from '../../model/actions/pages';

const pageLoad = createLogic({
	type: '@@router/LOCATION_CHANGE',
	async process({ getState, action: { payload } }, dispatch, done) {
		const {
			location: { pathname }
		} = payload;
		const key = pathname === '/' ? 'home' : pathname.replace('/', '');
		const hasPageData = getState().pages[key];
		if (hasPageData) {
			dispatch({
				type: SET_LOADED,
				payload: { setFinishedLoading: pathname }
			});
			 return done();
		}
		dispatch({
			type: SET_LOADING,
			payload: { setLoading: pathname }
		});
		await new Promise(res => setTimeout(() => {
			dispatch({
				type: SET_PAGE_DATA,
				payload: { key, data: key.toUpperCase() }
			});
			res();
		}, 3000));

		dispatch({
			type: SET_LOADED,
			payload: { setFinishedLoading: pathname }
		});
		done();
	}
});

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
		dispatch(push(path));
		done();
	}
});
export { pageLoad, navigateTo };
