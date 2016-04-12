import { FETCH_USERS } from './types';

export function fetchUsers() {
	return {
		type: FETCH_USERS,
		payload: [
			{name: 'Dom'},
			{name: 'Amanda'},
			{name: 'Stevie'},
			{name: 'P-Fraid'}
		]
	}
}