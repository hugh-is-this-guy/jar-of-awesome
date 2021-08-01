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

<style>
  form {
    display: flex;
    flex-direction: column;
    height: 80%;
    margin: 32px;
  }

  input, textarea {
    padding: 8px;
  }

  input {
    flex-grow: 0;
  }

  textarea {
    flex-grow: 1;
  }

</style>

<form>
  <input id="title" type="text" maxlength=5 bind:value={title} placeholder="emoji"><br>

  <textarea bind:value={note}></textarea>

  {#if !empty}
    <button on:click|preventDefault={createHandler} type="button" placeholder="awesome">Add</button>
  {/if}
</form>
