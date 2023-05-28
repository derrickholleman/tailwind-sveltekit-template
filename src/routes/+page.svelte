<script lang="ts">
  import Home from "$lib/components/Home.svelte";
  import { devDependencies } from '../../package.json'
</script>

{JSON.stringify(devDependencies['jest'])}
<Home />
