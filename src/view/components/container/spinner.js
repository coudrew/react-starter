import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner } from '../presentation';

class SpinnerContainer extends Component {
	render() {
		const { loading } = this.props;
		return <Spinner loading={loading[0]} />;
	}
}

const mapStateToProps = ({ app: { loading } }) => ({
	loading
});

export default withRouter(connect(mapStateToProps)(SpinnerContainer));
