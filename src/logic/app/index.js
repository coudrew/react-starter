import { createLogic } from 'redux-logic';
import { SET_LOADING, SET_LOADED, PAGE_LOAD } from '../../model/actions/app';
import { asyncLogic } from '../utils';

const pageLoad = createLogic({
	type: PAGE_LOAD,
	process({ getState, action }, dispatch, done) {
		const { page } = action;
		dispatch({
			type: SET_LOADING,
			payload: { setLoading: page }
		});
		return asyncLogic(loadPage)
			.then(f => {
				console.log(f);
				setTimeout(() => {
					dispatch({
						type: SET_LOADED,
						payload: { setFinishedLoading: page }
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
