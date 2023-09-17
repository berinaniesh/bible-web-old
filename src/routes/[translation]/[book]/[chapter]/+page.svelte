<script lang="ts">
	export let data;
</script>

<div class="max-w-screen-md mx-auto px-6 py-6">
	<p class="text-xl">{data.params.book} {data.params.chapter}</p>
	<br />
	{#each data.verses as verse}
		<div class="leading-relaxed text-lg py-4">
			{verse.verse_number}
			{verse.verse}<br />
		</div>
	{/each}
</div>
