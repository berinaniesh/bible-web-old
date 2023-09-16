import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`${api.base}/books?translation=${params.slug}`)
	const books = await res.json();
	return {
		books: books,
	};
}