<script>
  import { showModal, expandAll } from "../stores.js"

  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { eye, eyeSlash, plus } from 'svelte-awesome/icons';
</script>

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 16px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(51, 55, 69, 0.8)
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 46px;
    width: 46px;

    border-radius: 50%;
    padding: 0;
    border: solid black 3px;
    background: none;
    background-color: white;
  }
</style>

<div>
  <button on:click={() => $expandAll = !$expandAll}>
    <Icon data={$expandAll ? eyeSlash : eye} scale={2} />
  </button>

  <button on:click={() => $showModal = "new"}>
    <Icon data={plus} scale={2} />
  </button>
</div>
