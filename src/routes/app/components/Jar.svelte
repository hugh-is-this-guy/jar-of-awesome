<script>
  import { onMount } from "svelte"

  import { showModal, awesomes } from "../stores.js"

  import New from "./New.svelte"
  import Awesome from "./Awesome.svelte"

  let add = false;

  $: odd  = $awesomes.filter((_, i) => i % 2)
  $: even = $awesomes.filter((_, i) => !(i % 2))

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
    text-align: center;
    margin-bottom: 32px;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .column {
    flex-basis: 33%;

    display: flex;
    flex-direction: column;

    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 16px;
  }
</style>

<h2>Your Jar of Awesome</h2>

<section>
  <div class="column">
    {#each odd as awesome}
      <Awesome {awesome} />
    {/each}
  </div>

  <div class="column">
    {#each even as awesome}
      <Awesome {awesome} />
    {/each}
  </div>
</section>

<div>
  <button on:click={() => $showModal = !$showModal}>
    {#if $showModal}
      -
    {:else}
      +
    {/if}
  </button>

  <New />
</div>
