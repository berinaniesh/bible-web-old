<script lang="ts">
	export let data;
</script>

<div class="w-full flex py-6">
	<div class="flex mx-auto space-x-16">
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
