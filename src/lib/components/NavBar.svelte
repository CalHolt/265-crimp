<header id="site-header">
  <div><h1>CRIMP</h1></div>
  <nav id="nav-container">
    <ul class="nav-list">
      <li><a href="/">Profile</a></li>
      <li><a href="/create">Create</a></li>
      <li><a href="/explore">Explore</a></li>
    </ul>
  </nav>
  
</header>
<style>
  #site-header {
    align-items: center;
    display: flex;
  background: #5C2D1E;
  justify-content: space-between;
  color: #E6E0D0;
  padding: 1rem;
  }
  #nav-container {
    grid-template-rows: 1fr;
  }
  .nav-list {
    flex-direction: row;
    align-items: center;
    display: flex;
    gap: 8px;


    overflow: hidden;
    list-style-type: none;
    padding-left: 0;

  }

  a {
    text-decoration: none;
    color: #E6E0D0;
  }
  li {
    font-size: 20px;
    font-family:     'Work Sans', sans-serif;


  }
  h1 {
    font-family: 'Fugaz One', sans-serif;
  }

</style>