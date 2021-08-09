<script>
  import { tab } from "../stores.js"
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  button {
    background:none!important;
    border: none;
    padding: 0!important;

    font-family:arial,sans-serif;
    color: #069;
    cursor: pointer;

    font-size: 16px;
    margin-bottom: 16px;
}
button:hover{
  text-decoration:underline;
}
</style>

<div>
  <button on:click={() => $tab = "done"}>
    Done
  </button>

  <button on:click={() => $tab = "upcoming"}>
    Upcoming
  </button>
</div>
