<script>
  const DATA = fetchData();

  let lengthWord = 3;

  // $: array = DATA.split("\n");
  // $: posLetters = {};

  // $: filteredArray = array.filter((item, index) => {
  //   return true;
  // });

  async function fetchData() {
    if (localStorage.getItem("itaWords"))
      return localStorage.getItem("itaWords");

    return new Promise((resolve, reject) => {
      fetch("./data/data.txt")
        .then((res) => res.text())
        .then((data) => {
          
          localStorage.setItem("itaWords", data);
          resolve(data);
        });
    });
  }
</script>

hello world
<!-- 
<div class="p-4 grid gap-4">
  <div>
    <input type="number" bind:value={lengthWord} />
  </div>
  
  <div class="flex gap-2 flex-wrap">
    {#each new Array(lengthWord) as item, index}
      <input
        bind:value={posLetters[index]}
        type="text"
        class="border border-blue-700 py-2 text-center"
        placeholder="{index} "
        style="width: calc((100% / {array[0].length}) - 0.5rem);"
      />
    {/each}
  </div>

  <div class="p-4 bg-slate-300 text-xl rounded-xl">
    {#each filteredArray as item, index}
      <div class="grid grid-cols-2">
        <span>{index}</span>
        <span>{item}</span>
      </div>
    {/each}
  </div>
</div> -->
