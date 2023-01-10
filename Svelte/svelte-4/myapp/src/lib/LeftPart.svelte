<script>
  import CardButton from "$lib/CardButton.svelte";
  import CardDescription from "$lib/CardDescription.svelte";
  import CardTitle from "$lib/CardTitle.svelte";
  export let obj;
</script>

<div class="p-4 grid place-items-center bg-white/95 w-60">
  <div class="grid gap-4 text-center">
    <CardTitle obj={obj.title} />
    <hr>
    <CardDescription obj={obj.description} />
  </div>
  <CardButton />
</div>
