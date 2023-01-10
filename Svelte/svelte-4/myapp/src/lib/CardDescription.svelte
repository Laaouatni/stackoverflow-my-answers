<script>
  export let obj;

  function getArrayLines(str) {
    return str
      .split(/\n/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }
</script>

<div>
  {#each getArrayLines(obj) as line}
    <p>{line}</p>
  {/each}
</div>
