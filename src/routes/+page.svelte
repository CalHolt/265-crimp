<script>
  import DiscoverCard from "../lib/components/DiscoverCard.svelte";
  import Footer from "../lib/components/Footer.svelte";
  let cards = [
    {
      cardTitle: "Contact",
      cardDescription: "Coming Soon!",
      cardLink: "/"
    },
    {
      cardTitle: "Explore",
      cardDescription: "Discover user made climbs!",
      cardLink: "/explore"
    },
    {
      cardTitle: "Create",
      cardDescription: "Publish your own route!",
      cardLink: "/create"
    },
  ]
</script>
<header id="site-header">
  <div><h1>CRIMP</h1></div>
</header>

<header class="hero">
<h1>-Welcome to CRIMP-</h1>
<h3>Setting has never been easier</h3>
</header>
<div class="card-container">
  {#each cards as card}
  <DiscoverCard {...card} />
  {/each}
</div>
<div class="text">
<h1>-This is CRIMP-</h1>
<div class="about">
<p>CRIMP is a spray wall web application that allows users to create their very own routes on their gyms spray wall. Not only can a user make a unique route they can also view every route every user has created. I have designed this application because I am a climber. I love climbing indoors and outdoors but while climbing indoors my favourite wall to climb is the spray wall. I found myself drawn towards the creative aspect of both web development and climbing alike, so I decided to combine these two passions into one. Welcome to CRIMP the place where I have done just that. By heading to the create page you can click on holds and create your very own route. Attach a route name, your name and a grade to your route and publish it for all to see! If you click on explore you can view all published climbs that other users have created and give them a try!
</p>
<p>Happy climbing, <br> Cal</p>
</div>
</div>
<Footer />
<style>
   #site-header {
    align-items: center;
    display: flex;
  background: #5C2D1E;
  justify-content: space-between;
  color: #E6E0D0;
  padding: 1rem;
  }
  header h3, header h1 {
    margin: 0;
    color: #E6E0D0;
    text-shadow:2px 2px #5C2D1E ;
  }
h1{
  font-family: 'Fugaz One', sans-serif;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
  text-align: center;

  background-image: url(../images/71.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 35% 35%;
  background-blend-mode: darken;
}
.card-container {
  display: flex;
  justify-content: space-evenly;
 
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.about {
  max-width: 85ch;
  padding-left: 3rem;
}
</style>