import { createLogic } from 'redux-logic';
import { SET_LOADING } from '../../model/actions/app';

const pageLoad = createLogic({
	type: PAGE_LOAD,
	process({ getState, action }, dispatch, done) {
		const {
			payload: { page }
		} = action;
		dispatch({
			type: SET_LOADING,
			setLoading: page
		});
		done();
	}
});

export default pageLoad;
