<script lang="ts">
	export let data;
	let arr = [];
	for (let i = 1; i <= data.count; i++) {
		arr.push(i);
	}
</script>

<div class="w-full flex py-36">
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
