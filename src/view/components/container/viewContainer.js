import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ViewPresentation } from '../presentation';
import Spinner from './spinner';
import { getIsLoadingItem } from '../../../model/selectors/app';

class View extends Component {
	shouldComponentUpdate(nextProps) {
		const { pageIsLoading } = this.props;
		return nextProps.pageIsLoading !== pageIsLoading;
	}

	render() {
		const {
			children,
			pageIsLoading,
			match: { path }
		} = this.props;
		console.log(
			`rendering view container path: ${path}, pageIsLoading: ${pageIsLoading}`
		);
		return pageIsLoading ? (
			<Spinner />
		) : (
			<ViewPresentation {...this.props}>{children}</ViewPresentation>
		);
	}
}

const mapStateToProps = (state, props) => {
	const {
		match: { path }
	} = props;
	const getPageIsLoading = getIsLoadingItem(path);

	return {
		pageIsLoading: getPageIsLoading(state)
	};
};
export default withRouter(connect(mapStateToProps)(View));
