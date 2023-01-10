<script>
  import LeftPart from "$lib/LeftPart.svelte";

  export let obj;
</script>

<div class="grid grid-cols-2 rounded-xl hover:-translate-y-px hover:shadow-md transition overflow-hidden" style="--img: url('{obj.image}');">
  <LeftPart {obj}/>
</div>

<style>
  div {
    background-image: var(--img);
    background-size: cover;
  }
</style>
