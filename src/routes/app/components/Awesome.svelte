<script>
  import { userbase } from "../stores.js"

  export let awesome

  function bin() {
    $userbase.deleteItem({ databaseName: 'awesomes', itemId: awesome.itemId })
      .catch((e) => log(e))
  }
</script>

<style>
  div {
    padding-bottom: 16px;
    display: flex;
    flex-direction: row;
  }

  h3 {
    display: inline;
    padding-right: 8px;
  }

  p {
    flex-grow: 1;
    margin: 0;
  }
</style>

<div>
  <h3>{awesome.item.title}</h3>
  <p>{awesome.item.note}</p>
  <button on:click={bin}>🗑</button>
</div>
