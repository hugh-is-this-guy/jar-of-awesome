<script>
  import { showModal, expandAll, list } from "../stores.js"

  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { eye, eyeSlash, plus } from 'svelte-awesome/icons';
</script>

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 8px;
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

    padding: 0;
    border: solid black 3px;
    background: none;
    background-color: white;
  }

  .round {
    width: 46px;
    border-radius: 50%;
  }

  .box {
    width: 92px;
    border-radius: 24px;

    font-size: 20px;
  }

  .selected {
    background-color: #333745;
    color: #fff;
  }

  @media (min-width: 480px) {
    div {
      padding: 16px;
    }
  }
</style>

<div>
  <button class="round" on:click={() => $expandAll = !$expandAll}>
    <Icon data={$expandAll ? eyeSlash : eye} scale={2} />
  </button>

  <button class="box" class:selected="{$list === 'done'}" on:click={() => $list = "done"}>
    Done
  </button>

  <button class="box" class:selected="{$list === 'todo'}" on:click={() => $list = "todo"}>
    Todo
  </button>

  <button class="round" on:click={() => $showModal = "new"}>
    <Icon data={plus} scale={2} />
  </button>
</div>
