<script>
  import { onMount } from "svelte"

  import { showModal, awesomes, expandAll, list, userbase, isNewUser } from "../stores.js"
  import addIntroItems from "../introSetup.js"

  import Awesome from "./Awesome.svelte"
  import Controls from "./Controls.svelte"
  import Modal from "./Modal.svelte"
  import Nav from "./Nav.svelte"

  let add = false;

  let done = [];
  let todo = [];

  $: if ($list === "done") {
    $awesomes = done;
  } else {
    $awesomes = todo;
  }

  $: ones  = $awesomes.filter((_, i) => (i % 3) === 0)
  $: twos = $awesomes.filter((_, i) => (i % 3) === 1)
  $: threes = $awesomes.filter((_, i) => (i % 3) === 2)

  function changeHandler(items) {
    let a = [];
    let b = [];

    items.forEach((item) => {
      if (item.item.list === "todo") {
        a.push({ ...item, index: a.length })
      } else {
        b.push({ ...item, index: b.length })
      }
    })

    todo = a;
    done = b;
  }

  onMount(() => {
    $userbase.openDatabase({ databaseName: 'awesomes', changeHandler })
      .then(() => {
        if ($isNewUser) {
          addIntroItems($userbase)
          $isNewUser = false
        }
      })
      .catch((e) => console.log(e))
  })

</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 80px;
  }

  .column {
    flex-basis: 33%;

    display: flex;
    flex-direction: column;
  }
</style>

<Nav />
<section>
  <div class="column">
    {#each ones as awesome (awesome.itemId)}
      <Awesome {awesome} />
    {/each}
  </div>

  <div class="column">
    {#each twos as awesome (awesome.itemId)}
      <Awesome {awesome} />
    {/each}
  </div>

  <div class="column">
    {#each threes as awesome (awesome.itemId)}
      <Awesome {awesome} />
    {/each}
  </div>
</section>

<Controls />
<Modal />
