<template>
  <div>
   
 
  <b-modal id="hero-modal-news" title="О ферме" >


    <div class="side-bar">
  <nav class="navigation">
    <ul>
      <li>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#gallery">Gallery</a>
      </li>
    </ul>
  </nav>
</div>
<div class="main-content">
  <section id="about">
    <h1>About</h1>
  </section>
  <section id="products">
    <h1>Products</h1>
  </section>
  <section id="services">
    <h1>Services</h1>
  </section>
  <section id="contact">
    <h1>Contact</h1>
  </section>
  <section id="gallery">
    <h1>Gallery</h1>
  </section>
</div>

  </b-modal>
  </div>
</template>

<script>

export default {
    mounted() {
     
window.addEventListener("scroll", this.navHighlighter);

    } ,
  methods: {
navHighlighter() {
  const sections = document.querySelectorAll("section[id]");
  // Get current scroll position
  let scrollY = window.pageYOffset;
    console.log(1)
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  })

}
    }
};
</script>
<style scoped>

.side-bar {
  width: 160px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

nav ul {
  padding: 0;
}

nav li {
  list-style: none;
}

nav li a {
  text-decoration: none;
  color: #333;
  display: block;
  font-weight: 400;
  transition: all ease-out 
    250ms;
   transform:rotate(270deg);
  padding: 35px;
}

nav li a:hover {
  color: lime;
}

.main-content {
  margin-left: 160px;
}

section {
  background-color: #f2f2f2;
  height: 90vh;
  margin:0;
  padding:2.5rem 4rem;
}

section:nth-of-type(2n) {
  background-color: #ccc;
}

section:last-of-type {
  height: 100vh;
}

h1 {
  color: #444;
  font-weight: 600;
}

.active {
  color: lime; 
  font-weight: 600;
}
</style>


