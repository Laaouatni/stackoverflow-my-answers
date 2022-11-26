<script>
  let objs = []
  
  function update() {
    objs = [...objs, "a"];
  }
</script>

<h1>Lists</h1>

{#each objs as obj}
  <div>{obj}</div>
{/each}

<button on:click={update}>Update</button>
