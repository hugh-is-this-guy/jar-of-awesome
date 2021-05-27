<script>
  import { userbase, authPromise, user } from "../stores.js"

  let username, password;

  function signUp() {
    $authPromise = $userbase.signUp({ username, password, rememberMe: 'none' })
      .then((u) => $user = u)
      .catch((e) => console.log(e))
  }

  function signIn() {
    console.log("SINGING IN");
    $authPromise = $userbase.signIn({ username, password, rememberMe: 'none' })
      .then((u) => $user = u)
      .catch((e) => console.log(e))
  }
</script>

<form>
  <label for="username">Username</label>
  <input id="username" type="text" bind:value={username}><br>
  <label for="password">Password</label>
  <input id="password" type="password" bind:value={password}><br>
  <button on:click={signIn} type="button">Sign in</button>
  <button on:click={signUp} type="button">Sign up</button>
</form>
