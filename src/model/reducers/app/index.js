import { createReducer } from '../utils';
import { app } from '../../actions/index';
console.log(app);
const INITIAL_STATE = {
	loading: [],
};

const setIsLoading = (state, payload) => {
	const { loading } = state;
	const { setLoading } = payload;
	return {
		loading: [...loading, setLoading],
		...state,
	};
};

const pageLoad = (state, payload) => {
	return setIsLoading(state, payload);
};

const handlers = {
	[app.PAGE_LOAD]: pageLoad,
	[app.SET_LOADING]: setIsLoading,
};

export default createReducer(INITIAL_STATE, handlers);
