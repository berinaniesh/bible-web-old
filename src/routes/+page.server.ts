import * as api from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  const currentTranslationCookie = cookies.get("currentTranslation")
  const currentBookCookie = cookies.get("currentBook")
  const currentChapterCookie = cookies.get("currentChapter")
  const res = await fetch(`${api.base}/translations`);
  const translations = await res.json();
  let lP = null
  if (currentTranslationCookie && currentBookCookie && currentChapterCookie) {
    lP = `/${currentTranslationCookie}/${currentBookCookie}/${currentChapterCookie}`
  }
  return {
    translations: translations,
    lastPage: lP
  };
};
