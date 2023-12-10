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
<div class="img-overlay-wrap">
  <img src="../images/IMG_3584.jpeg" alt="sss">
  <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="1014">
  {#each climbingHolds as hold, index (index + 1) }  
    <path id={`${index}`} class="hold" class:selected style="fill: black;" aria-hidden="true" fill="#fff" fill-opacity="0" on:click={handlePathClick} on:click={addHold} on:dblclick={removePathClick} stroke-width="2px"  stroke="#000"  d={hold.d}/>
  {/each}  
  </svg>
</div>
<div class="container">
<form on:submit|preventDefault={submitData}>
  <label for="name">Name:</label>
  <input type="text" id="slug" bind:value={slug} required />

  <label for="description">Author:</label>
  <input id="description" bind:value={description} required />

  <label for="grade">Grade:</label>
  <input type="number" id="grade" bind:value={grade} min="0" max="100" required />

  <button  type="submit">Submit</button>
</form>

</div>
<Footer />
<style>
  .img-overlay-wrap {
    display: grid;
   justify-items: center;
    align-items: center;
  }

  form {
    padding: 1rem;
  }

input {
  height: 50px;
  position: relative;
  width: 400px;
  
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
  
  </style>