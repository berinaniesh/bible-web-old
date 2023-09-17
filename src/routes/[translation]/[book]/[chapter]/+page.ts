import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(
		`${api.base}/verses?tr=${params.translation}&b=${params.book}&ch=${params.chapter}`
	);
	const verses = await res.json();
	return {
		verses: verses,
		params: params
	};
};
