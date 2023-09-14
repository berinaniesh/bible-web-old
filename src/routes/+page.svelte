<script lang=ts>
	import * as api from '$lib/api.ts'

	const translations = api.get(`translations`);

</script>


<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Translations available</h1>
		<div>
			{#await translations}
				<p>Loading data from server</p>
			{:then translations_arr}
				{#each translations_arr as translation}
					<p>{translation.name}</p><br>
					<p>{translation.full_name}</p><br>
					<p>{translation.year}</p><br>
					<p>{translation.license}</p><br>
					<p>{translation.description}</p><br>
				{/each}
			{:catch error}
				<p> Error </p>
			{/await}
		</div>
	</div>
</div>
