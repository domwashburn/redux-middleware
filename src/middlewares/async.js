export default function({ dispatch }) {
	return next => action => {
		// if the action doesn't have a payload OR the payload does not have a .then property
		// just send it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}

		// Wait for the actions promise to resolve
		action.payload
			.then(function(response) {
				// create a new action with the old type,
				// but replace the payload with the response (resolved promise) data
				const newAction = { ...action, payload: response };
				dispatch( newAction );
			})
	};
}