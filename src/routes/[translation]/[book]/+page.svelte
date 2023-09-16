<script lang="ts">
    export let data;
</script>

{#each data.verses as verse}
{verse.chapter}:{verse.verse_number}&emsp;{verse.verse}<br>
{/each}