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

<div class="max-w-screen-md mx-auto px-6 py-6">
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