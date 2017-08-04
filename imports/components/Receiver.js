import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

class Receiver extends Component {
	render() {
		console.log(this.constructor.name, "render()", this.props, this.state);

		const data = this.props.data && this.props.data.length ? String(this.props.data[0].number) : "No data in state";
		return (
			<div>
				<strong>
					Redux Receiver: {data}
				</strong>
			</div>
		)
	}
};

function mapStateToProps(state) {
	console.log("Receiver", "mapStateToProps()", state);
	return {
		data: state.dataReducer.data,
		// uploadProgress: state.entity.uploadProgress
	};
}

export default connect(mapStateToProps)(Receiver);
