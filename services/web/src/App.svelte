<script lang="ts">
  import Route, {link} from 'svelte-spa-router'
  import Home from './routes/index.svelte'
  import Tags from './routes/tags.svelte'

  import * as rpc from '../../../../ts-rpc/src/client.ts'
  const client = new rpc.createRPCClient('/')
  console.log({client})

  const routes = {
    '/': Home,
    '/tags': Tags,
  }
</script>

<main>
  <div>
    <a href="/" use:link>home</a>
    <a href="/tags" use:link>tags</a>
  </div>
  <Route {routes}/>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
