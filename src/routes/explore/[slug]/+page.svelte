<script>
  export let data;
  import NavBar from '../../../lib/components/NavBar.svelte';
  import Footer from '../../../lib/components/Footer.svelte';
</script>
<NavBar />
<header>
  <div class="info">
    <h1>{data.title}</h1>
    <p>Created by {data.content}</p>
  </div>
<div class="grade">
  <h2>V{data.grade}</h2>
</div>
</header>
<div>
  <div class="img-overlay-wrap">
  <img src="../images/IMG_3584.jpeg" alt="sss">
  <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="1014">
   {#each data.holds as hold}
    <path class="hold" aria-hidden="true" d={hold}/>
    {/each}
    
    </svg>
  </div>
</div>
<Footer />
  <style>
    h1, h2{
      font-family: 'Fugaz One', sans-serif;
    }
    header {
      padding: 1rem;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .grade{
      margin-right: 20rem;
      color: #D66737;
    }
    .info {
      margin-left: 20rem;
    }
   
    .hold {
  stroke: #D66737;
  fill: none;
  stroke-width: 6px;
    }
    .img-overlay-wrap {
    display: grid;
   justify-items: center;
    align-items: center;
    padding: 1rem;
  }
  svg {
    
    grid-row: 1;
    grid-column: 1;
    z-index: 1;
   
  }
  img {
   
    grid-row: 1;
    grid-column: 1;
    
   height: auto;
  }
    

  </style>


