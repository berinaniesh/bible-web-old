<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Bible</title>
</svelte:head>

<div class="max-w-screen-md mt-8 mx-auto px-6">
  <ol class="w-fit breadcrumb">
    <li class="crumb"><a class="anchor" href="/">Home</a></li>
	  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  </ol>
</div>


<div class="container h-full w-7/12 mx-auto flex justify-center items-center py-36">
  <div class="space-y-4">
    <h1 class="h1 flex w-auto">The Bible</h1>
    <div>
      <div class="grid grid-cols-2">
        {#each data.translations as translation}
          <a
            class="block card card-hover md:w-48 md:h-48 m-2 p-4 w-11/12 bg-primary-200 hover:bg-primary-500"
            href="/{translation.name}"
          >
            <header class="font-bold card-header">{translation.name}</header>
            <section class="p-4">
              <p>{translation.language}</p>
              <br />
              <p>{translation.year}</p>
            </section>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

{#if data.lastPage}
  <div class="w-full mx-auto container flex justify-center items-center my-4">
    <a class="text-gray-400 underline" href={data.lastPage}>Continue Reading</a>
  </div>
{/if}

<div class="w-full mx-auto container flex justify-center items-center my-4">
  <a class="text-gray-400 underline" href="/about">About</a>
</div>
