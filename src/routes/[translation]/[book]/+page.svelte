<script lang="ts">
  export let data;
  let arr = [];
  for (let i = 1; i <= data.count; i++) {
    arr.push(i);
  }
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
  <title>{current_translation_book} • {data.params.translation} • Bible</title>
</svelte:head>

<div class="max-w-screen-md mt-8 mx-auto px-6">
  <ol class="w-fit breadcrumb">
    <li class="crumb"><a class="anchor" href="/">Home</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href={"/" + data.params.translation}>{data.params.translation}</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="font-bold">{data.params.book}</li>
  </ol>
</div>

<div class="text-center max-w-screen-md mx-auto px-6 py-6">
  <p class="text-xl font-bold">{current_translation_book}</p>
  <div class="w-full flex py-6">
    <div class="flex">
      <div class="grid grid-cols-8">
        {#each arr as c}
          <a href="/{data.params.translation}/{data.params.book}/{c}">
            <button type="button" class="btn btn-xl hover:bg-primary-400">
              {c}
            </button>
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex justify-between">
    {#if data.nav.previous}
      <a data-sveltekit-reload href="/{data.params.translation}/{data.nav.previous.book}">
        <button class="btn btn-xl bg-gray-100 hover:bg-primary-400 font-bold text-2xl py-6"> ← </button>
      </a>
    {:else}
      <div />
    {/if}
    {#if data.nav.next}
      <a data-sveltekit-reload href="/{data.params.translation}/{data.nav.next.book}">
        <button class="btn btn-xl bg-gray-100 hover:bg-primary-400 font-bold text-2xl py-6"> → </button>
      </a>
    {:else}
      <div />
    {/if}
  </div>
</div>
