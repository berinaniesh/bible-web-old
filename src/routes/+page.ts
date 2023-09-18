import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(`${api.base}/translations`);
  const translations = await res.json();
  return {
    translations: translations,
  };
};
