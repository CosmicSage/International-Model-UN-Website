import React from "react";
import '../static/css/nav.css';
const NavElements = ["Home", "Search For IMUNs", "Features", "Organise IMUN", "About Us", "Blogs"];
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark custom_nav">
      <a style={styles.navItem} className="navbar-brand Brand" href="#">
        <img src={require("../static/images/IMUN.png")} style={{paddingRight : 10}}/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse secondary" id="navbarToggler">
        <ul className="navbar-nav mr-auto">
          {NavElements.map(element => (
            <li>
              <a href='#' style={{color : "GhostWhite"}} className="nav-link">{element}</a>
            </li>
          ))}
          <li>
            <a style={{color : "GhostWhite"}} className="nav-link">Login/Register <img style={styles.arrow} src={require("../static/images/Arrow-Vector.png")}/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const styles = {
  navItem : {color : "#ffffff"},
  arrow : {
    transform : "rotate(180deg)"
  }
}


//
// <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>


// <a style={styles.navItem}>Search For IMUNs</a>
// <a style={styles.navItem}>Organise IMUN</a>
// <a style={styles.navItem}>Features</a>
// <a style={styles.navItem}>About Us</a>
// <a style={styles.navItem}>Blog</a>
// <a style={styles.navItem}>Login/Register</a>
