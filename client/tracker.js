import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import store from '/imports/redux/store';
import { TestDataCollection } from '/imports/collections/testData';
import { updateData } from '/imports/redux/actions/index'

Tracker.autorun(function (computation) {
    Meteor.subscribe("testData", function() {
        // console.log("main", "autorun() testData subscribed");
    });
    let testData = TestDataCollection.find({});
    const testDataResults = testData.fetch();
    testData.observe(
		{
            added: function (document) {
                // console.log("main", "autorun() added()", document);
                store.dispatch(updateData(testDataResults));
            },
            changed: function(newDocument, oldDocument) {
                // console.log("main", "autorun() changed()", newDocument, oldDocument);
                store.dispatch(updateData(testDataResults));
            }
        }
	);
});

// function selectFromStore(state) {
//     return state.filters.selectedPublisherId ? state.filters.selectedPublisherId.valueOf() : null;
// }

// let currentValue;
// function handlePublisherIdChange(a, b) {
//     let previousValue = currentValue;
//     currentValue = selectFromStore(store.getState())

//     if (previousValue !== currentValue) {
//         // console.log("main", "store handlePublisherIdChange()", currentValue);
//         let testData = TestDataCollection.find({});
//         const testDataResults = testData.fetch();
//         // store.dispatch(updateData(testDataResults));
//     }
// }

// let unsubscribe = store.subscribe(handlePublisherIdChange)