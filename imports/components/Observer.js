import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import { TestDataCollection } from '/imports/collections/testData';
import { updateData } from '/imports/redux/actions/index'

class Observer extends Component {
	componentWillReceiveProps(nextProps) {
		console.log(this.constructor.name, "componentWillReceiveProps()", nextProps);
		if (nextProps.testData && nextProps.testData.length > 0 && nextProps.testData[0].number) {
			// this.props.updateData(nextProps.data);
		}
		else {
			// this.props.updateData([ { number: -1 } ]);
		}
	}

	render() {
		console.log(this.constructor.name, "render()", this.props, this.state);

		return (
			<strong>Database Observer: {this.props.testData && this.props.testData.length > 0 ? this.props.testData[0].number : "..."}</strong>
		)
	}
};

let ObserverContainer = createContainer((props) => {
	console.log("ObserverContainer", "createContainer() props", props);
	const testDataSubscription = Meteor.subscribe('testData'
		// , {
		//         onReady: function (a, b) { console.log("ObserverContainer", "createContainer() onReady", a, b); },
		//         onError: function (a, b) { console.error("ObserverContainer", "createContainer() onError", a, b); }
		//     }
	);

	// https://docs.meteor.com/api/collections.html#Mongo-Cursor-observe
	let testData = TestDataCollection.find({});
	if (testData) {
		testData.observe({
			added: function (document) {
				console.log("ObserverContainer", "createContainer() added()", document);
			},
			changed: function (newDocument, oldDocument) {
				console.log("ObserverContainer", "createContainer() changed()", newDocument, oldDocument);
			},
			removed: function (oldDocument) {
				console.log("ObserverContainer", "createContainer() removed()", oldDocument);
			}
		})
			;
	}
	const testDataResults = testData.fetch();
	console.log("ObserverContainer", "createContainer() testData", testDataResults, testDataSubscription.ready());

	return {
		ready: testDataSubscription.ready(),
		testData: testDataResults,
	};
}, Observer);

export default connect(null, { updateData })(ObserverContainer);
