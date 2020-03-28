import { createLogic } from 'redux-logic';
import { SET_LOADING, SET_LOADED } from '../../model/actions/app';
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

export default pageLoad;
