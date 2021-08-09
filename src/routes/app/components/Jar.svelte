<script>
  import { onMount } from "svelte"

  import { showModal, awesomes } from "../stores.js"

  import Awesome from "./Awesome.svelte"
  import Controls from "./Controls.svelte"
  import Modal from "./Modal.svelte"
  import Tabs from "./Tabs.svelte"

  let add = false;

  $: ones  = $awesomes.filter((_, i) => (i % 3) === 0)
  $: twos = $awesomes.filter((_, i) => (i % 3) === 1)
  $: threes = $awesomes.filter((_, i) => (i % 3) === 2)

  function changeHandler(items) {
    $awesomes = items.map((item, i) => { return { ...item, index: i }} )
  }

  onMount(() => {
    userbase.openDatabase({ databaseName: 'awesomes', changeHandler })
      .catch((e) => console.log(e))
  })

</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .column {
    flex-basis: 33%;

    display: flex;
    flex-direction: column;

    padding: 8px;
  }
</style>

<Tabs />

<section>
  <div class="column">
    {#each ones as awesome}
      <Awesome {awesome} />
    {/each}
  </div>

  <div class="column">
    {#each twos as awesome}
      <Awesome {awesome} />
    {/each}
  </div>

  <div class="column">
    {#each threes as awesome}
      <Awesome {awesome} />
    {/each}
  </div>
</section>

<Controls />
<Modal />
