import { applyMiddleware, createStore, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
// import promise from 'redux-promise';
import rootReducer from '/imports/redux/reducers';
import DevTools from '/imports/redux/devTools';

const enhancers = [
	// applyMiddleware(reduxThunk, promise),
	// https://github.com/zalmoxisus/redux-devtools-extension#usage
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	// DevTools.instrument()
];

const store = createStore(
	rootReducer, // reducer
	{}, // preloadedState
	compose(...enhancers) // enhancer
);

export default store;
