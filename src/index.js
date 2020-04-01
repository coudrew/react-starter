import React, { Component, PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import configureStore, { history } from './model/reducers';
import { View, PseudoLink } from './view/components';

const store = configureStore();
const routeConfigs = [
	{
		path: '/',
		component: () => (
			<View>
				<h1>hello</h1>
				<PseudoLink path="/four">four</PseudoLink>
				<PseudoLink path={'/two'}>two</PseudoLink>
				<PseudoLink path={'/three'}>three</PseudoLink>
			</View>
		)
	},
	{
		path: '/two',
		component: () => (
			<View>
				<h1>two</h1>
				<PseudoLink path={'/'}>home</PseudoLink>
			</View>
		)
	},
	{
		path: '/three',
		component: () => (
			<View>
				<h1>three</h1>
				<PseudoLink path={'/'}>home</PseudoLink>
			</View>
		)
	},
	{
		path: '/four',
		component: () => (
			<View>
				<h1>four</h1>
				<PseudoLink path={'/'}>home</PseudoLink>
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
