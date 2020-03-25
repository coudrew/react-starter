import { createReducer } from '../utils';
import { app } from '../../actions/index';

const INITIAL_STATE = {
	loading: []
};

const setIsLoading = (state, payload) => {
	const { loading } = state;
	const { setLoading } = payload;
	return {
		loading: [...loading, setLoading],
		...state
	};
};

const pageLoad = (state, payload) => {
	return setIsLoading(state, payload);
};

const handlers = {
	[app.PAGE_LOAD]: pageLoad,
	[app.SET_LOADING]: setIsLoading
};

const appReducer = createReducer(INITIAL_STATE, handlers);
export default appReducer;
