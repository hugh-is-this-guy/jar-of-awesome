<script>
  import { userbase, showModal, list, title, note, itemId } from "../stores.js"

  $: item = {
    databaseName: "awesomes",
    item: {
      title: $title,
      note: $note,
      list: $list
    },
    ...($itemId && { itemId: $itemId }),
  }

  $: empty = (!$title || !$note)

  function handler(e) {
    if ($itemId) {
      $userbase.updateItem(item)
        .then(() => {
          $title = "";
          $note = "";
          $itemId = "";
          $showModal = false;
        })
        .catch((e) => console.error(e))

    } else {
      $userbase.insertItem(item)
        .then(() => {
          $title = "";
          $note = "";
          $showModal = false;
        })
        .catch((e) => console.log(e))
    }
  }
</script>

<style>
  form {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 80%;
    max-width: 30em;
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
  <input id="title" type="text" maxlength=5 bind:value={$title} placeholder="emoji">

  <textarea bind:value={$note} placeholder="description"></textarea>

  <button
    on:click|preventDefault={handler}
    type="button"
    placeholder="awesome"
    disabled={empty}>
    {#if $itemId}
      Update
    {:else}
      Add
    {/if}
  </button>
</form>
