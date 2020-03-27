import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import configureStore, { history } from './model/reducers';
import { View } from './view/components';

const store = configureStore();
const routes = [{ path: '/', component: () => <h1>hello</h1> }];

class Shell extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						{routes.map(({ path, component: WrappedComponent }) => (
							<Route
								path={path}
								render={routeProps => (
									<View {...routeProps}>
										<WrappedComponent />
									</View>
								)}
							/>
						))}
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<Shell />, document.getElementById('react-root'));
