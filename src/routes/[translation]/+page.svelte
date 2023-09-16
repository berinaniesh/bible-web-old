<script lang="ts">
    export let data;
</script>

<h3>Old Testament</h3>
<ul>
{#each data.books["Old Testament"] as book}
    <a href="/{data.translation}/{book[0]}"><li>{book[1]}</li></a>
{/each}
</ul>

<h3>New Testament</h3>
<ul>
{#each data.books["New Testament"] as book}
    <a href="/{data.translation}/{book[0]}"><li>{book[1]}</li></a>
{/each}
</ul>