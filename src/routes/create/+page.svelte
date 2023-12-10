<script>
  import NavBar from '../../lib/components/NavBar.svelte';
  import Footer from '../../lib/components/Footer.svelte';
  const outputArr = [];
  import { climbingHolds} from '$lib/data.js' 
  
   
  import { createClient } from '@supabase/supabase-js';
  let slug = '';
  let description = '';
  let grade = 0;
  let new_route = outputArr;

  const supabaseUrl = 'https://tpldobulmqzpspkgjadf.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGRvYnVsbXF6cHNwa2dqYWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwODI5MjgsImV4cCI6MjAxNzY1ODkyOH0.JgEqtF9bK8re85UAQG88l7k_lnBAV8E7uvDxf-ahE08';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const submitData = async () => {
    const tableName = 'route';

    const data = {
      slug,
      description,
      grade,
      new_route,
    };

    const { data: insertedData, error } = await supabase
      .from(tableName)
      .upsert([data]);

    if (error) {
      console.error('Error submitting data:', error.message);
      return;
    }

    console.log('Data submitted successfully:', insertedData);
    // You can add further actions here, such as updating the UI or showing a success message
  };


// function to add holds to your climb
function addHold(e) {
  outputArr.push(e.target.getAttribute('d'));
}
  console.log(outputArr)

 
  // make holds light up
  let selected;
  
  function handlePathClick () {
    this.classList.add('selected');
  }
  function removePathClick () {
    this.classList.remove('selected')
  }
  
</script>
<NavBar />
<h1>Create a route</h1>
<div class="img-overlay-wrap">
  <img src="../images/IMG_3584.jpeg" alt="sss">
  <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="1014">
  {#each climbingHolds as hold, index (index + 1) }  
    <path id={`${index}`} class="hold" class:selected style="fill: black;" aria-hidden="true" fill="#fff" fill-opacity="0" on:click={handlePathClick} on:click={addHold} on:dblclick={removePathClick} stroke-width="2px"  stroke="#000"  d={hold.d}/>
  {/each}  
  </svg>
</div>
<div class="container">
  
<form class="subscribe-form" on:submit|preventDefault={submitData}>
<div class="field">
  <label for="name">Name:</label>
  <input type="text" id="slug" class="subscribe-input" bind:value={slug} required />
</div>
<div class="field">
  <label for="description">Author:</label>
  <input id="description" class="subscribe-input" bind:value={description} required />
</div> 
<div class="field">
  <label for="grade">Grade:</label>
  <input class="subscribe-input" type="number" id="grade" bind:value={grade} min="0" max="100" required />
</div>
  <button class="subscribe-btn" type="submit">Submit</button>
</form>

</div>
<Footer />
<style>
  h1 {
    font-family: 'Fugaz One', sans-serif;
    text-align: center;
    color: #D66737;
  }
  .img-overlay-wrap {
    display: grid;
   justify-items: center;
    align-items: center;
  }
  
  .subscribe-form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  label {
    font-size: 30px;
    font-family: 'Fugaz One', sans-serif;
  }
  .field {
    display: flex;
    align-items: center;
  }

  .subscribe-input {
    margin: 1rem;
    padding: 1rem;
    background-color: #D0943F;
    
    
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
  .container{
    align-items: center;

  }
  .hold.selected {
    stroke: red;
    fill: bisque;
    fill-opacity: 100;
  }
  .hold {
    stroke: blue;
  }
  button {
    padding: 1rem;
    background-color: #5C2D1E;
    border-color: #D66737;
    border-radius: 15%;
    box-shadow: 5px 5px #D0943F;
  }
  button:hover {
    background-color: #D0943F;
    box-shadow: 5px 5px #5C2D1E;
  }
  </style>