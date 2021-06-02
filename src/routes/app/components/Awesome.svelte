<script>
  import { slide } from 'svelte/transition';

  import { userbase } from "../stores.js"

  export let awesome;
  export let show = false;

  const colours = [
    "#79CBC5",
    "#FFFF97",
    "#FBAE4A",
    "#F3858E",
  ]

  $: colour = colours[awesome.index % colours.length]

  function bin() {
    $userbase
      .deleteItem({ databaseName: 'awesomes', itemId: awesome.itemId })
      .catch((e) => log(e))
  }
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 16px;
    padding-left: 8px;
    padding-right: 8px;

    background-color: var(--background-colour);
  }

  h3 {
    font-size: 60px;

    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    flex-grow: 1;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
  }
</style>

<div on:click={() => show = !show} style="--background-colour: {colour}">
  <h3>{awesome.item.title}</h3>
  {#if show}
    <p transition:slide="{{ duration: 250}}">{awesome.item.note}</p>
  {/if}
  <!-- <button on:click={bin}>🗑</button> -->
</div>
