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
</script>

<svelte:head>
	<title>Jar of Awesome</title>
</svelte:head>


{#await $authPromise}
	<p>Loading...</p>

{:then _}
	{#if $user}
		{$user.username}
		<Jar />

	{:else}
		<Auth />
	{/if}

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
