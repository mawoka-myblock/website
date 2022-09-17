import { error } from '@sveltejs/kit';
import json_data from '../status.json';
export const load = async ({ params, fetch }) => {
	if (json_data[params.slug] === undefined) {
		throw error(404);
	}
	return {
		status_id: params.slug
	};
};
