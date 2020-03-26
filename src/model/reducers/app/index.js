import { createReducer } from '../utils';
import { SET_LOADING } from '../../actions/app';

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
	[SET_LOADING]: setIsLoading
};

const appReducer = createReducer(INITIAL_STATE, handlers);
console.log(appReducer);
export default appReducer;
