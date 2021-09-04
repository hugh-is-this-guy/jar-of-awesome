<script>
  import { userbase, user, authPromise } from "../stores.js"
  import { goto } from "@sapper/app";

  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { userCircle } from 'svelte-awesome/icons';

  let shown = false

  function signOut() {
		$userbase.signOut()
			.then(() => {
        goto("/")
      })
      .catch((e) => console.log(e))
	}
</script>

<style>
  header {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  button, a {
    cursor: pointer;
  }

  .round {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 46px;
    width: 46px;

    padding: 0;
    border: solid black 3px;
    background: none;
    background-color: white;
    border-radius: 50%;
  }

  div {
    position: absolute;
    top: 100%;
    z-index: 2;
    background-color: #333745;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 16px;
  }

</style>

<header>
  <button class="round" on:click={() => shown = !shown}>
    <Icon data={userCircle} scale={2} />
  </button>

  {#if shown}
    <div>
      <ul>
        <li>
          <a on:click={signOut}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  {/if}
</header>
