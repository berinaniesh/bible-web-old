<script>
  import { fade } from 'svelte/transition';
  export let verseText;
  export let verseNumber;
  export let chapterNumber;
  export let bookName;
  export let translationName;

  let visible = false;

  async function copyToClipboard() {
    const text =
      verseText +
      '\n\n' +
      bookName +
      ' ' +
      chapterNumber +
      ':' +
      verseNumber +
      ' ' +
      '(' +
      translationName +
      ')';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    visible = true;
    await new Promise((r) => setTimeout(r, 700));
    visible = false;
  }
</script>

{#if visible}
  <div class="bg-primary-400 p-2 rounded absolute top-4 right-4" out:fade>Copied!</div>
{/if}

<div role="cell" tabindex="0" class="hover:cursor-pointer" on:dblclick={copyToClipboard}>
  <sup>{verseNumber}</sup>
  {verseText}<br />
</div>
