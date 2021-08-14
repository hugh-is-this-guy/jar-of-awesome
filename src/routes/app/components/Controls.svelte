<script>
  import { showModal, expandAll } from "../stores.js"

  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { gear, eye, eyeSlash, plus, list, th } from 'svelte-awesome/icons';

  let settings = false;
</script>

<style>
  .container {
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

  @media (min-width: 480px) {
    .container {
      padding: 16px;
    }
  }

  .left, .right {
    display: flex;
    flex-direction: row;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 48px;

    border-radius: 50%;
    border: solid black 3px;
    background: none;
    background-color: white;
  }

  .settings-container {
    position: relative;
  }

  .settings {
    position: absolute;
    bottom: 54px;
    left: -4px;
    padding: 8px;
    background-color: rgba(51, 55, 69, 1);
  }

  .setting {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 4px;
  }

  .rotate-90 {
    transform: rotate(90deg);
  }

  span {
    margin-left: 8px;
  }
</style>

<div class="container">
  <div class="left">

    <div class="settings-container">
      {#if settings}
        <div class="settings">

          <div class="setting">
            <a on:click={() => console.log("noop")}>
              <Icon data={list} scale={2} />

              <span>
                row layout
              </span>
            </a>

          </div>

          <div class="setting">
            <button class="rotate-90" on:click={() => console.log("noop")}>
              <Icon data={th} scale={2} rotate={90} />
            </button>

            <span>
              row layout
            </span>
          </div>

          <div class="setting">
            <button on:click={() => $expandAll = !$expandAll}>
              <Icon data={$expandAll ? eyeSlash : eye} scale={2} />
            </button>

            <span>
              toggle display
            </span>
          </div>
        </div>
      {/if}

      <button on:click={() => settings = !settings}>
        <Icon data={gear} scale={2} />
      </button>
    </div>
  </div>

  <div class="right">
    <button on:click={() => $showModal = "new"}>
      <Icon data={plus} scale={2} />
    </button>
  </div>
</div>
