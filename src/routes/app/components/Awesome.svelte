<script>
  import { userbase } from "../stores.js"

  export let awesome;
  export let show = false;

  function bin() {
    $userbase.deleteItem({ databaseName: 'awesomes', itemId: awesome.itemId })
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

    border: solid 1px black;
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

<div on:click={() => show = !show}>
  <h3>{awesome.item.title}</h3>
  {#if show}
    <p>{awesome.item.note}</p>
  {/if}
  <!-- <button on:click={bin}>🗑</button> -->
</div>
