<script lang="ts">
  import Verse from './Verse.svelte';
  export let data;
  function get_book_name() {
    let current_book = data.params.book;
    for (let i = 0; i < data.books['Old Testament'].length; i++) {
      if (current_book === data.books['Old Testament'][i][0]) {
        return data.books['Old Testament'][i][1];
      }
    }
    for (let i = 0; i < data.books['New Testament'].length; i++) {
      if (current_book === data.books['New Testament'][i][0]) {
        return data.books['New Testament'][i][1];
      }
    }
  }
  let current_translation_book = get_book_name();
</script>

<svelte:head>
  <title>{current_translation_book} {data.params.chapter} • {data.params.translation} • Bible</title
  >
</svelte:head>

<div class="max-w-screen-md mt-8 mx-auto px-6">
  <ol class="w-fit breadcrumb-nonresponsive">
    <li class="crumb"><a class="anchor" href="/">Home</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href={"/" + data.params.translation}>{data.params.translation}</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href={"/" + data.params.translation + "/" + data.params.book}>{data.params.book}</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="font-bold">{data.params.chapter}</li>
  </ol>
</div>

<div class="max-w-screen-md mx-auto px-6 py-6 mt-2">
  <p class="text-xl text-center font-bold">{current_translation_book} {data.params.chapter}</p>
  <br />
  {#each data.verses as verse}
    <div class="leading-relaxed text-lg py-4">
      <Verse
        verseNumber={verse.verse_number}
        verseText={verse.verse}
        chapterNumber={data.params.chapter}
        bookName={current_translation_book}
        translationName={data.params.translation}
      />
    </div>
  {/each}
</div>

<div class="max-w-screen-md mx-auto">
<div class="flex justify-between px-6">
  {#if data.nav.previous}
    <a data-sveltekit-reload href="/{data.params.translation}/{data.nav.previous.book}/{data.nav.previous.chapter}">
      <button class="btn btn-xl bg-gray-100 hover:bg-primary-400 font-bold text-2xl my-6"> ← </button>
    </a>
  {:else}
    <div />
  {/if}
  {#if data.nav.next}
    <a data-sveltekit-reload href="/{data.params.translation}/{data.nav.next.book}/{data.nav.next.chapter}">
      <button class="btn btn-xl bg-gray-100 hover:bg-primary-400 font-bold text-2xl my-6"> → </button>
    </a>
  {:else}
    <div />
  {/if}
</div>
</div>