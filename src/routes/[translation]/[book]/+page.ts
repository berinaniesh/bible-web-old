import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res1 = await fetch(`${api.base}/chaptercount/${params.book}`);
  let currentPage = { book: `${params.book}`, chapter: 0 };
  let res2 = await fetch(`${api.base}/nav`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: '*/*' },
    body: JSON.stringify(currentPage),
  });
  let nav = await res2.json();
  const count = await res1.json();
  return {
    count: count.count,
    params: params,
    nav: nav,
  };
};
