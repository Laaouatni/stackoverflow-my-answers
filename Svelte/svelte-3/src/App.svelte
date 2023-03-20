<script>
  import InputParole from "./lib/InputParole.svelte";
  import ListParole from "./lib/ListParole.svelte";

  let positions;
</script>

<div class="p-4 grid gap-4 min-h-screen">
  <InputParole bind:posLetters={positions} />
  <h1 class="text-lg font-bold">Risultato</h1>
  <ListParole {positions} />
</div>
