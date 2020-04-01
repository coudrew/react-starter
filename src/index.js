import React, { Component, PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import configureStore, { history } from './model/reducers';
import { View } from './view/components';

const store = configureStore();
const routeConfigs = [
	{
		path: '/',
		component: () => (
			<View>
				<h1>hello</h1>
				<Link to={'/two'}>two</Link>
				<Link to={'/three'}>three</Link>
			</View>
		)
	},
	{
		path: '/two',
		component: () => (
			<View>
				<h1>two</h1>
				<Link to={'/'}>home</Link>
			</View>
		)
	},
	{
		path: '/three',
		component: () => (
			<View>
				<h1>three</h1>
				<Link to={'/'}>home</Link>
			</View>
		)
	}
];

class Shell extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						{routeConfigs.map(
							({ path, component: WrappedComponent }) => (
								<Route
									path={path}
									exact
									key={path}
									render={routeProps => (
										<WrappedComponent {...routeProps} />
									)}
								/>
							)
						)}
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<Shell />, document.getElementById('react-root'));
