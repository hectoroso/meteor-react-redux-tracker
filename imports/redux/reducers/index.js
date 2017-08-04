import { combineReducers } from 'redux';

import dataReducer from './updateData';

const rootReducer = combineReducers({
	dataReducer: dataReducer
});

export default rootReducer;
