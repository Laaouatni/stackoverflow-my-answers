<script>
  import Card from "$lib/Card.svelte";
  import img1 from "../images/article-image-1.jpg";
  import img2 from "../images/article-image-2.jpg";

  const data = [
    {
      title: "LE CLUB",
      description: `inscrivez-vous dés
      maintenant et profitez de
      nos offres spéciales!`,
      image: img1,
    },
    {
      title: "NOS ACTUS",
      description: `Offres spéciales,
      nouvelles gammes de produits. Evenements...`,
      image: img2,
    },
    {
      title: "LE CLUB",
      description: `inscrivez-vous dés
      maintenant et profitez de
      nos offres spéciales!`,
      image: img1,
    },
    {
      title: "NOS ACTUS",
      description: `Offres spéciales,
      nouvelles gammes de produits. Evenements...`,
      image: img2,
    },
  ];
</script>

<div class="flex gap-4 flex-wrap justify-center p-4">
  {#each data as obj}
    <Card {obj} />
  {/each}
</div>
