import { TestDataCollection } from '/imports/collections/testData';

Meteor.publish('testData', function (filter) {
	return TestDataCollection.find(filter || {});
});

Meteor.startup(function () {
	Meteor.setInterval(function() {
	    const data = TestDataCollection.findOne({});
	    if (data) {
			// console.log("has data");
	        TestDataCollection.update(data._id, { $set: {number: Math.floor(Math.random() * 1000)}});
		}
		else {
			// console.log("no data");
	        TestDataCollection.insert({number: Math.floor(Math.random() * 1000)});
		}
	}, 10000);
});