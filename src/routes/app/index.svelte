<script>
	import { onMount } from 'svelte';
	import { userbase, authPromise, user } from "./stores.js"
	import Jar from "./components/Jar.svelte"
	import Auth from "./components/Auth.svelte"

	onMount(() => {
	 	$userbase = window.userbase;

		$authPromise = $userbase.init({appId: 'ef05a92d-f72b-4c41-b37a-36fbb65ed0e1'})
			.then((res) => $user = res.user)
			.catch((e) => console.log(e))
	})

	function signOut() {
		userbase.signOut()
			.then(() => $user = {})
      .catch((e) => console.log(e))
	}
</script>

<svelte:head>
	<title>Jar of Awesome</title>
</svelte:head>


<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 16px;
	}
</style>

{#await $authPromise}
	<p>Loading...</p>

{:then _}
	{#if $user}
		<Jar />

	{:else}
		<Auth />
	{/if}

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
