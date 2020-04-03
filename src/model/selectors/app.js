export const getIsLoadingItem = key => ({ app: { loading } }) => {
	const { set } = loading;
	return key ? set.has(key) || set.has('init') : set.size;
};

export const getIsLoading = ({ app: { loading } }) => {
	const { set } = loading;

	return set && set.size;
};
