<script>
  import { slide } from 'svelte/transition';

  import { userbase, expandAll } from "../stores.js"
  import { longpress } from "../longpress.js"

  export let awesome;

  let expand = false;
  let pressed = false;

  const colours = [
    "#79CBC5",
    "#FFFF97",
    "#FBAE4A",
    "#F3858E",
  ]

  $: colour = colours[awesome.index % colours.length]
  $: if (!$expandAll && !expand) {
    pressed = false;
  }

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
    align-items: stretch;
    justify-content: center;

    height: auto;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;

    background-color: var(--background-colour);
  }

  h3 {
    font-size: 40px;
    text-align: center;

    margin-top: 8px;
    margin-bottom: 8px;
  }

  span {
    flex-grow: 1;
    text-align: center;

    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  button {
    align-self: flex-end;
  }
</style>

<div on:click={() => expand = !expand} style="--background-colour: {colour}">
  <h3>{awesome.item.title}</h3>

  {#if $expandAll || expand}
    <span
      transition:slide="{{ duration: 250}}"
      use:longpress
      on:longpress="{() => pressed = true}"
      on:mouseenter="{() => pressed = false}">

      <p>
        {awesome.item.note}
      </p>

      {#if $expandAll && pressed}
        <button on:click={bin}>🗑</button>
      {/if}
    </span>
  {/if}
</div>
