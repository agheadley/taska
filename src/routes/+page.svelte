<script>
  import {signIn, signOut} from "@auth/sveltekit/client"
  import {page} from "$app/stores";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="row">
	<div class="col-3">
		<h4>taska</h4>
	</div>
</div>

<p>
    {#if $page.data.session}
        <span>
            <small>Signed in as</small><br/>
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
        <span>You are not signed in</span>
        <button on:click={() => signIn("google")}>
            Sign In with Google
        </button>
    {/if}
</p>

<style>

</style>
