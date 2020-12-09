import React from "react"; import '../static/css/nav.css'; const NavElements = ["Home", "Search For IMUNs", "Pricing", "Organise IMUN", "About Us", "Blogs"];
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark custom_nav">
      <a style={styles.navItem} className="navbar-brand Brand" href="#">
        <img src={require("../static/images/IMUN.png").default} style={{paddingRight : 10}}/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse secondary" id="navbarToggler">
        <ul className="navbar-nav mr-auto">
          {NavElements.map(element => (
            <li>
              <a href={element === "Pricing" ?  `/#/pricing` : '#'} style={{color : "GhostWhite"}} className="nav-link">{element}</a>
            </li>
          ))}
          <li>
            <a href="/#/auth" style={{color : "GhostWhite"}} className="nav-link">Login/Register <img style={styles.arrow} src={require("../static/images/Arrow-Vector.png").default}/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const styles = {navItem : {color : "#ffffff"}, arrow : { transform : "rotate(180deg)"}}
