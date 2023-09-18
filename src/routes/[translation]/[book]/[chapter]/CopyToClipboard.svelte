<script>
  let textToCopy = 'Text to be copied';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying to clipboard: ', error);
      });
  };
</script>

<button on:click={copyToClipboard} class="btn-lg">📋</button>
