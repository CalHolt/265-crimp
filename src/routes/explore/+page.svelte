<script>
  import NavBar from '../../lib/components/NavBar.svelte';
  export let data;
  import ClimbCards from "../../lib/components/ClimbCards.svelte";
  import Footer from '../../lib/components/Footer.svelte';
</script>
<NavBar />
<div class="header">
  <h1>Browse Climbs</h1>
</div>
<div class="card-container">
  {#each data.route as card}
   <ClimbCards climbTitle = {card.slug} climbDescription = {card.description} climbGrade = {card.grade} climbLink = {card.slug}/>
  {/each}
</div>
<Footer />
<style>
 h1{
  font-family: 'Fugaz One', sans-serif;
}
  .card-container{
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    
  }

  .header {
    text-align: center;
  }
</style>