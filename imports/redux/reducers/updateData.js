const INITIAL_STATE = { data: [{ number: -1 }] };

export default function (state = INITIAL_STATE, action) {
	console.log("function", "data reducer", state, action);
	switch (action.type) {
		case 'UPDATE_DATA':
			return { ...state, data: action.data };
		default:
			return state;
	}
}