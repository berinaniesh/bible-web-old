import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(
    `${api.base}/verses?tr=${params.translation}&b=${params.book}&ch=${params.chapter}`,
  );
  const verses = await res.json();
  const currentPage = { book: `${params.book}`, chapter: parseInt(params.chapter) };
  const res2 = await fetch(`${api.base}/nav`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: '*/*' },
    body: JSON.stringify(currentPage),
  });
  const nav = await res2.json();
  return {
    verses: verses,
    params: params,
    nav: nav,
  };
};
