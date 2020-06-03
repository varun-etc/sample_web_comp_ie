<script context="module">
	import './components/components.module.js';
	
	export const label = {
		buttonTitle: "Click to say hello"
	};		
</script>

<h1>Sample App</h1>

<my-web-comp-button language="de" id="FA170730" {label}/>
<svelte:options tag="my-web-comp-button-test-app" />