<script>
  export let positions;

  const DATA = new Promise((resolve) => {
    import("../data")
      .then((data) => data.default)
      .then((data) => {
        resolve(data);
      });
  });


  function filterWords(obj) {
    return obj.data
      .split("\n")
      .filter((word) => word.length > obj.length)
      .filter((word) => {
        let valid = true;
        Object.entries(obj.positions).forEach(([position, letter]) => {
          if (word[position] !== letter) {
            valid = false;
          }
        });
        return valid;
      });
  }
</script>

<div class="grid place-items-center p-4 min-h-screen bg-slate-200">
  {#await DATA}
    attendi... loading
  {:then value}
    <div class="grid gap-2">
      {#each filterWords( { data: value, positions: positions, length: 4 }, ) as item}
        <div
          class="bg-white p-2 opacity-80 hover:opacity-100 hover:scale-150 hover:shadow-2xl transition"
        >
          {item}
        </div>
      {/each}
    </div>
  {:catch error}
    Error...
  {/await}
</div>
