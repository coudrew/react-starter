export const getIsLoadingItem = key => ({ app: { loading } }) => {
	return key
		? loading.includes(key) || loading.includes('init')
		: loading.length;
};

export const getIsLoading = ({ app: { loading } }) => {
	return loading && loading[0];
};
