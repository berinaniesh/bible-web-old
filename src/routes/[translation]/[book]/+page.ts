import * as api from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(`${api.base}/chaptercount/${params.book}`);
  const count = await res.json();
  return {
    count: count.count,
    params: params,
  };
};
