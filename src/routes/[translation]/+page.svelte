<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>{data.translation} • Bible</title>
</svelte:head>

<div class="max-w-screen-md mt-8 mx-auto px-6">
  <ol class="w-fit breadcrumb-nonresponsive">
    <li class="crumb"><a class="anchor" href="/">Home</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="font-bold">{data.translation}</li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  </ol>
</div>

<div class="max-w-screen-sm mx-auto px-6 py-6">
			
  <div class="flex mx-auto space-x-16 mx-auto">
    <ul>
      {#each data.books['Old Testament'] as book}
        <a href="/{data.translation}/{book[0]}">
          <li>
            <button type="button" class="btn btn-lg hover:bg-primary-400">
              {book[1]}
            </button>
          </li>
        </a>
      {/each}
    </ul>

    <ul>
      {#each data.books['New Testament'] as book}
        <a href="/{data.translation}/{book[0]}">
          <li>
            <button type="button" class="btn btn-lg hover:bg-primary-400">
              {book[1]}
            </button>
          </li>
        </a>
      {/each}
    </ul>
  </div>
</div>
