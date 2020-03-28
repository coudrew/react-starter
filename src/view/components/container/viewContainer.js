import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ViewPresentation } from '../presentation';
import { PAGE_LOAD } from '../../../model/actions/app';
import { getIsLoadingItem } from '../../../model/selectors/app';

class View extends Component {
	shouldComponentUpdate(nextProps) {
		const { pageIsLoading } = this.props;
		return nextProps.pageIsLoading !== pageIsLoading;
	}

	render() {
		const { children, pageIsLoading } = this.props;
		return pageIsLoading ? (
			<h1>loading</h1>
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
