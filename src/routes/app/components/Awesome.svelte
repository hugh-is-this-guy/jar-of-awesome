<script>
  import { slide, fly, fade, crossfade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { ellipsisV, trash, pencil, check } from 'svelte-awesome/icons';

  import { userbase, expandAll, showModal, list, title, note, itemId } from "../stores.js"

  export let awesome;

  let expand = false;
  $: expand = $expandAll;

  let menu = false;

  const colours = [

    "#79CBC5",
    "#FFFF97",
    "#FBAE4A",
    "#F3858E",

  ]

  $: colour = colours[awesome.index % colours.length]

  function bin() {
    $userbase
      .deleteItem({ databaseName: 'awesomes', itemId: awesome.itemId })
      .catch((e) => log(e))
  }

  function done() {
    awesome.item.list = "done";

    $userbase
      .updateItem({
        databaseName: "awesomes",
        item: awesome.item,
        itemId: awesome.itemId
      })
      .catch((e) => log(e))
  }

  function edit() {
    $title = awesome.item.title;
    $note = awesome.item.note;
    $itemId = awesome.itemId;

    $showModal = true;
  }

  function toggleMenu() {
    menu = !menu;

    setTimeout(() => {
      menu = false;
    }, 3000)
  }

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      };
    }
  });
</script>

<style>
  .awesome {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    height: auto;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    margin: 2px;
    border-radius: 4px;

    background-color: var(--background-colour);
  }

  h3 {
    font-size: 40px;
    text-align: center;

    margin-top: 8px;
    margin-bottom: 8px;
  }

  .description {
    flex-grow: 1;
    text-align: center;

    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 0;
    margin-bottom: 24px;

    color: #000;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .controls {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  button {
    margin: 4px;
    border: none;
    background: none;
  }

</style>

<div
  class="awesome"
  style="--background-colour: {colour}"
  in:receive="{{key: awesome.itemId}}"
  out:send="{{key: awesome.itemId}}"
  >

  <h3>{awesome.item.title}</h3>

  {#if expand}
    <div class="description" transition:slide|local="{{ duration: 250}}">
      <p>
        {awesome.item.note}
      </p>
    </div>
  {/if}

  <div class="overlay"
    on:click={() => expand = !expand}>

      <div class="controls">
        {#if menu && expand}
          <button on:click|stopPropagation={bin} transition:fly={{x: 10}}>
            <Icon data={trash} />
          </button>
          <button on:click|stopPropagation={edit} transition:fly={{x: 10}}>
            <Icon data={pencil} />
          </button>
          {#if $list === "todo"}
            <button on:click|stopPropagation={done} transition:fly={{x: 10}}>
              <Icon data={check} />
            </button>
          {/if}
        {/if}

        {#if expand}
          <button on:click|stopPropagation={toggleMenu}>
            <Icon data={ellipsisV} />
          </button>
        {/if}
      </div>
  </div>

</div>
