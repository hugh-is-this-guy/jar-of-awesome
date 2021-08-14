<script>
  import { userbase, authPromise, user } from "../stores.js"

  let username, password;

  function signUp() {
    $authPromise = $userbase.signUp({ username, password, rememberMe: 'local', sessionLength: 8760 })
      .then((u) => $user = u)
      .catch((e) => console.log(e))
  }

  function signIn() {
    $authPromise = $userbase.signIn({ username, password, rememberMe: 'local', sessionLength: 8760 })
      .then((u) => $user = u)
      .catch((e) => console.log(e))
  }
</script>

<style>
  .container {
    position: absolute;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 80%;
    max-width: 24em;
    margin: 32px;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
  }

  .controls {
    display: flex;
    flex-direction: row;
  }

  button {
    padding: 8px;
    flex-grow: 1;
  }

  .login {
    margin-right: 4px;
  }

  .signup {
    margin-left: 4px;
  }
</style>

<div class="container">
  <form>
  <input id="username" type="email" bind:value={username} placeholder="email">
  <input id="password" type="password" bind:value={password} placeholder="password">

  <div class="controls">
    <button class="login" on:click={signIn} type="submit">Sign in</button>
    <button class="signup" on:click={signUp} type="button">Sign up</button>
  </div>
  </form>
</div>
