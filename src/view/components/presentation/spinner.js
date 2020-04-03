import React, { Component } from 'react';

class Spinner extends Component {
	render() {
		const { loading } = this.props;
		return (
			<div className="spinner-container">
				<div className="spinner"></div>
				<p>{loading}</p>
			</div>
		);
	}
}

export default Spinner;
