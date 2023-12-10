<script>
  export let climbTitle = '';
  export let climbDescription = '';
  export let climbLink;
  export let climbGrade;
</script>
<a href="explore/{climbLink}">
  <div class="card">
      <h1>{climbTitle}</h1>
      <p>{climbDescription}</p>
      <div class="grade-container">
        <p>V{climbGrade}</p>
      </div>
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
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .card:hover {
    background-color: #5C2D1E;
    box-shadow: 10px 10px #D0943F;
    text-shadow:2px 2px #D0943F; 
  }
  .grade-container {
  background-color: #D66737;
  border-radius: 10px;
 
  height: 50px;
  width: 50px;
  text-align:  center;
  display: inline-block;
  padding: 1px;
}
  </style>