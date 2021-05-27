<script>
	import { onMount } from 'svelte';
	import { userbase, authPromise, user } from "./stores.js"
	import Auth from "./components/Auth.svelte"

	onMount(() => {
	 	$userbase = window.userbase;

		$authPromise = $userbase.init({appId: '3d794443-177f-42ff-83c5-7233f755b132'})
			.then(({u}) => $user = u)
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
		Hello {$user.username}
	{:else}
		<Auth />
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
