<script>
    export let verseText;
    export let verseNumber
    export let chapterNumber;
    export let bookName;
    export let translationName;


function copyToClipboard() {
    const text = verseText + "\n\n" + bookName + " " + chapterNumber + ":" + verseNumber + " " + "(" + translationName + ")";
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
</script>

<div class="hover:cursor-pointer" on:click={copyToClipboard}>
{verseNumber}
{verseText}<br />
</div>