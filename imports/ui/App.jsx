import React, { Component } from 'react';
import Observer from '/imports/components/Observer'
import Receiver from '/imports/components/Receiver'

export default class App extends Component {
	render() {
		console.log(this.constructor.name, "render()")
		return (
			<div className="container">
				<header>
					<h1>Redux</h1>
				</header>

				<div>
					<Observer />
				</div>

				<div>
					<Receiver />
				</div>
			</div>
		);
	}
}