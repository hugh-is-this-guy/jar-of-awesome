<script>
  import { userbase, showModal } from "../stores.js"

  let title, note;

  $: newItem = {
    databaseName: "awesomes",
    item: {
      title: title,
      note: note
    }
  }

  function createHandler(e) {
    $userbase.insertItem(newItem)
      .then(() => {
        title = ""
        note = ""
        $showModal = false
      })
      .catch((e) => console.log(e))
  }
</script>



{#if $showModal}
  <div>
    <form>
      <label for="title">Title</label>
      <input id="title" type="text" bind:value={title}><br>

      <label for="note">Note</label>
      <textarea bind:value={note}></textarea>

      <button on:click|preventDefault={createHandler} type="button">Add</button>
    </form>
  </div>
{/if}
