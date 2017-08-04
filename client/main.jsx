import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '/imports/redux/store';
import App from '../imports/ui/App';

console.log("main.jsx");

const HelloWorld = ({ name }) => (
	<div>{`HelloWorld Hi ${name}`}</div>
);

const HelloWorldReturn = ({ name }) => {
	console.log("HelloWorldReturn", "render()");
	return (
		<div>{`HelloWorldReturn Hi ${name}`}</div>
	)
};

function AppRoot() {
	return (
		<div className='app-container'>
			<Provider store={store}>
				<App />
			</Provider>
		</div>
	);
}

Meteor.startup(() => {
	render(<AppRoot />, document.getElementById('render-target')
	);
});
