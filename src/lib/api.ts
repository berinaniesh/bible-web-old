import { error } from '@sveltejs/kit';

const base = 'https://api.bible.berinaniesh.xyz';

async function send({ method, path }) {
	const opts = { method, headers: {} };
	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}
	throw error(res.status);
}

export function get(path) {
	return send({ method: 'GET', path });
}
