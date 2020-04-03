import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner } from '../presentation';

class SpinnerContainer extends Component {
	render() {
		const { queue } = this.props;
		return <Spinner loading={queue[0]} />;
	}
}

const mapStateToProps = ({
	app: {
		loading: { queue }
	}
}) => ({
	queue
});

export default withRouter(connect(mapStateToProps)(SpinnerContainer));
