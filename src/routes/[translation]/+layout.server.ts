import * as api from '$lib/api';
import type { LayoutServerLoad } from './$types';

function combineArrays(v1, v2) {
  const v3 = {};

  // Iterate over the keys in v1 (assuming v1 and v2 have the same keys)
  for (const key in v1) {
    if (v1.hasOwnProperty(key)) {
      // Combine the arrays from v1 and v2
      const combinedArray = v1[key].map((item, index) => [v2[key][index], item]);
      v3[key] = combinedArray;
    }
  }
  return v3;
}

export const load: LayoutServerLoad = async ({ fetch, params }) => {
  const res = await fetch(`${api.base}/books?translation=${params.translation}`);
  const res2 = await fetch(`${api.base}/books`);
  const books_tr = await res.json();
  const books_eng = await res2.json();
  const books = combineArrays(books_tr, books_eng);
  return {
    books: books,
    translation: params.translation,
  };
};
