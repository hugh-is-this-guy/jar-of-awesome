<script>
  import { scale } from "svelte/transition"

  import { showModal } from "../stores.js"

  import New from "./New.svelte"
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { times } from 'svelte-awesome/icons';
</script>

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(51, 55, 68, 0.9);
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

    position: absolute;
    bottom: 16px;
    right: 16px;
  }
</style>

{#if $showModal}
  <div transition:scale={{duration: 200}}>
    <New />
    <button on:click={() => $showModal = false}>
      <Icon data={times} scale={2} />
    </button>
  </div>
{/if}
