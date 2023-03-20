<script>
  export let lengthWord = 1;
  export let posLetters = {};
</script>

<div class="grid gap-4">
  <div>
    <input type="number" bind:value={lengthWord} class="border-2 w-full" />
  </div>

  <div class="flex gap-2 flex-wrap justify-center">
    {#each new Array(lengthWord) as item, index}
      <input
        bind:value={posLetters[index]}
        type="text"
        class="border border-blue-700 py-2 text-center"
        placeholder="{index} "
        style="width: calc((100% / {lengthWord}) - 0.5rem);"
      />
    {/each}
  </div>
</div>
