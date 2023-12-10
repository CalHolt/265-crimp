<script>
  export let cardTitle = '';
  export let cardDescription = '';
  export let cardLink;
</script>
<a href="{cardLink}">
<div class="card">
    <h1>{cardTitle}</h1>
    <p>{cardDescription}</p>
</div>
</a>
<style>
  .card {
  margin: 1rem;
  padding: 1rem;
  background-color: #D0943F;
  height: 25vh;
  min-width: 300px;
  max-width: 320px;
  border-radius: 20px;
  box-shadow: 10px 10px #5C2D1E ;
  border: 3px solid #D66737 ;

  color: #E6E0D0;
  text-shadow:2px 2px #5C2D1E; 
  text-align: center;  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: 'Fugaz One', sans-serif;
}
a {
  text-decoration: none;
}
.card:hover {
  background-color: #5C2D1E;
  box-shadow: 10px 10px #D0943F;
  text-shadow:2px 2px #D0943F; 
}
</style>