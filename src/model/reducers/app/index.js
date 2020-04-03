import { createReducer } from '../utils';
import { SET_LOADING, SET_LOADED } from '../../actions/app';

const INITIAL_STATE = {
	loading: ['init']
};

const setIsLoading = (state, payload) => {
	const { loading } = state;
	const { setLoading } = payload;
	if (loading.includes(setLoading)) {
		return state;
	}

	return {
		...state,
		loading: [
			setLoading,
			...loading.filter(currentLoading => currentLoading !== 'init')
		]
	};
};

const setIsFinishedLoading = (state, payload) => {
	const { loading } = state;
	const { setFinishedLoading } = payload;

	return {
		...state,
		loading: loading.filter(
			currentLoading =>
				currentLoading !== setFinishedLoading &&
				currentLoading !== 'init'
		)
	};
};

const handlers = {
	[SET_LOADING]: setIsLoading,
	[SET_LOADED]: setIsFinishedLoading
};

export default createReducer(INITIAL_STATE, handlers);
