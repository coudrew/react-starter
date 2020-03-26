import { createLogic } from 'redux-logic';
import { PAGE_LOAD } from '../../model/actions/app';

const pageLoad = createLogic({
	type: PAGE_LOAD,
	process({ getState, action }, dispatch, done) {
		const {
			payload: { page }
		} = action;
		dispatch({
			type: PAGE_LOAD,
			setLoading: page
		});
		done();
	}
});

export default pageLoad;
