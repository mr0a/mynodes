<script lang="ts">
	import type { PageData } from './$types';
	import { PUBLIC_NAME } from '$env/static/public';

	export let data: PageData;
	$: ({ mnodes } = data);
</script>

<h1 class="text-3xl">Welcome to {PUBLIC_NAME}.in</h1>
<ul>
	{#each mnodes as node}
		<li>{node}</li>
	{/each}
</ul>
