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

  $: empty = (title === undefined || note === undefined)

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



<form>
  <label for="title">Title</label>
  <input id="title" type="text" bind:value={title}><br>

  <label for="note">Note</label>
  <textarea bind:value={note}></textarea>

  {#if !empty}
    <button on:click|preventDefault={createHandler} type="button">Add</button>
  {/if}
</form>
