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

  $: empty = (!title || !note)



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
    justify-content: center;
    height: 80%;
    margin: 32px;
  }

  input, textarea, button {
    padding: 8px;
  }

  input {
    margin-bottom: 16px;
  }

  textarea {
    margin-bottom: 16px;
    height: 80px;

    resize: none;
  }

</style>

<form>
  <input id="title" type="text" maxlength=5 bind:value={title} placeholder="emoji">

  <textarea bind:value={note} placeholder="description"></textarea>

  <button
    on:click|preventDefault={createHandler}
    type="button"
    placeholder="awesome"
    disabled={empty}>
    Add
  </button>
</form>
