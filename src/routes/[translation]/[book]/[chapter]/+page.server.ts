import * as api from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
  cookies.set("currentTranslation", params.translation, {path: "/"})
  cookies.set("currentBook", params.book, {path: "/"})
  cookies.set("currentChapter", params.chapter, {path: "/"})
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
