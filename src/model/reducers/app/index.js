import { createReducer } from '../utils';
import { SET_LOADING, SET_LOADED } from '../../actions/app';

const INITIAL_STATE = {
	loading: new Set(['init'])
};

const setIsLoading = (state, payload) => {
	const { loading } = state;
	const { setLoading } = payload;
	if (loading.has('init')) {
		loading.delete('init');
	}
	loading.add(setLoading);

	return {
		...state,
		loading
	};
};

const setIsFinishedLoading = (state, payload) => {
	const { loading } = state;
	const { setFinishedLoading } = payload;
	if (loading.has('init')) {
		loading.delete('init');
	}
	if (loading.has(setFinishedLoading)) {
		loading.delete(setFinishedLoading);
	}

	return {
		...state,
		loading
	};
};

const handlers = {
	[SET_LOADING]: setIsLoading,
	[SET_LOADED]: setIsFinishedLoading
};

export default createReducer(INITIAL_STATE, handlers);
