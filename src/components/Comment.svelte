<script>
export let label;

function sayHello() {
	alert("Hello");
}
</script>

<svelte:options tag="my-web-comp-button" accessors />
<button on:click={sayHello}>
	{#if (typeof label !='undefined' && label.buttonTitle)}{label.buttonTitle}{:else}Click to say hello{/if}
</button>