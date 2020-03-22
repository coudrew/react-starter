import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './model/reducers';
import { View } from './view/components';

const store = configureStore();

class Shell extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<View />
				</ConnectedRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<Shell />, document.getElementById('react-root'));
