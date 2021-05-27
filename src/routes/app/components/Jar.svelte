<script>
  import { onMount } from "svelte"

  import { showModal, awesomes } from "../stores.js"

  import New from "./New.svelte"
  import Awesome from "./Awesome.svelte"

  let add = false;

  function showAdd() {
    $showModal = true
  }

  function changeHandler(items) {
    $awesomes = items
  }

  onMount(() => {
    userbase.openDatabase({ databaseName: 'awesomes', changeHandler })
      .catch((e) => console.log(e))
  })

</script>

<style>
  h2 {
    margin-bottom: 16px;
  }
</style>

<h2>Awesomes</h2>

<div>
  {#each $awesomes as awesome}
    <Awesome {awesome} />
  {/each}
</div>

<div>
  <button on:click={showAdd}>+</button>
  <New />
</div>
