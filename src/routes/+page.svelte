<script lang="ts">
	export let data;
</script>

<div class="container h-full w-7/12 mx-auto flex justify-center items-center py-36">
	<div class="space-y-4">
		<h1 class="h1 flex w-auto">The Bible</h1>
		<div>
			<div class="grid grid-cols-2">
				{#each data.translations as translation}
					<a
						class="block card card-hover p-4 w-11/12 bg-primary-200 hover:bg-primary-500"
						href="/{translation.name}"
					>
						<header class="card-header">{translation.name}</header>
						<section class="p-4">
							<p>{translation.language}</p>
						</section>
						<footer>Year: {translation.year}</footer>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
