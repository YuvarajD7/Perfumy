import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Style.css"

import Designer from "./assets/img/Designer club blue.png"
import fogg from "./assets/img/fogg.png"
import villian from "./assets/img/Villian.png"

const root = ReactDOM.createRoot(document.getElementById('root'));

//components

function Navbar(){
    return(
        <nav>
            <h1>Perfumy</h1>
           <ul>
            <li>Home |</li>
            <li>Products |</li>
            <li>About |</li>
            <li>Concat |</li>
           </ul>
        </nav>
    )
}

function About(){
  return(
    <div class="about">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque numquam, maiores ad explicabo iure molestias atque minima, error dignissimos, eum suscipit illum aut magni. Natus hic pariatur iure repellat.</p>
    </div>
  )
}

function Search(){
  return(
    <div class="searchbar">
       <input type='text' placeholder='search'></input>
    </div>
 
  )
}

function Products(){
  return(
    <div class="products">
      <div class ="box">
        <img src={Designer} alt='no img'></img>
        <p>
          The <b>Designer Club Eau de Parfum</b> features a premium deep-blue bottle with a sleek finish.
          Its matching navy-blue box and bold silver lettering create a sophisticated, modern look.
        </p>
      </div>

      <div class ="box">
        <img src={villian} alt='villian img'></img>
        <p>
          The <b>VILLAIN Eau de Parfum</b> features a luxurious amber-brown bottle with a bold geometric design.
          Its matching dark-brown box and elegant gold lettering create a premium.
        </p>
      </div>

      <div class ="box">
         <img src={fogg} alt="FOGG perfume" />
        <p>
          The <b>FOGG Eau de Parfum</b> features a stylish black-and-brown bottle with a bold, modern design.
          Its matching premium box and bold FOGG lettering create a sleek, sophisticated appearance.
        </p>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer>
      <div class="contact">     
        <h3>Contact</h3>
          <p style={{marginTop: "5px"}}>+91 3478631928 <br />
             perfumy@gmail.com
          </p>
          

        <p style={{fontSize: "small", padding: "20px",color: "grey"}}></p>

      </div>
      </footer>
    
  )
}

root.render(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
    
  </div>
)