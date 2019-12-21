import React from "react";
import "../static/css/footer.css";
const Links = ["Search For IMUNs", "Organise IMUN", "Features", "Blogs"];
const MUN_LINKS = ["MUN Conference Highlights", "MUN Conference List", "MUN Conference Calendar", "MUN Conference Map"];
export default function Footer() {
  return (
    <div style={styles.footer}>
      <div className="footer_first">
        <div className="footer_about">
        <h5 style={styles.about}>About mymun</h5>
        <p>The ultimate MUN database, conference management tool, and social network.</p>
        <p>Join over 100,000 muners to discover new MUN conferences, organize your own MUN conference, research and publish Position Papers, travel cheaply and securely, and make friends for life.</p>
        </div>
        <div className="footer_links">
          <div style={{paddingRight : 40}} className="footer_link">{Links.map(link => (<a style={styles.links}>{link}</a>))}</div>
          <div style={{paddingLeft : 40}} className="footer_link">{MUN_LINKS.map(link => (<a style={styles.links}>{link}</a>))}</div>
        </div>
      </div>
      <p>COPYRIGHT © 2018-2019, INTERNATIONAL MODEL UNITED NATIONS</p>
    </div>
  );
}
const styles = {
  footer : {
    color : "#fff", backgroundColor : "#121E32", height : "410px", display : "flex",
    flexDirection : "column", justifyContent : "space-around", alignItems : "center"
  },
  about : { fontSize : 24 },
  links : {paddingBottom : 10, fontSize: 22, color : "#fff"}
}
