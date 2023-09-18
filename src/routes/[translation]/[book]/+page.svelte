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

<div class="text-center max-w-screen-md mx-auto px-6 py-6">
  <p class="text-xl">{current_translation_book}</p>
  <div class="w-full flex py-6">
    <div class="flex mx-auto">
      <ul class="grid grid-cols-8">
        {#each arr as c}
          <a href="/{data.params.translation}/{data.params.book}/{c}">
            <li class="py-1.5">
              <button type="button" class="btn btn-xl hover:bg-primary-400">
                {c}
              </button>
            </li>
          </a>
        {/each}
      </ul>
    </div>
  </div>
</div>
