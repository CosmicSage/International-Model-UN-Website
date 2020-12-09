import React from "react";
import "../static/css/footer.css";
import "../static/css/ServiceBox.css";
const Links = ["Search For IMUNs", "Organise IMUN", "Features", "Blogs"];
const MUN_LINKS = ["MUN Conference Highlights", "MUN Conference List", "MUN Conference Calendar", "MUN Conference Map"];
const Infos = [
  {img : require("../static/images/call.png").default, title : "Phone", value : "(+91) 999 741 5973"},
  {img : require("../static/images/mail.png").default, title : "Mail", value : "info@internationalmun.org"},
  {img : require("../static/images/location.png").default, title : "Address", value : "E-73 Sector 50, Gautam Budh Nagar, Noida, India - 201 304"},

];
const InfoElement = props => (
  <div className="info_element">
    <p style={{fontSize : 8}}><img className="invert" src={props.img}/></p>
    <div className="info_content">
      <span>{props.title}</span><p style={{color : "#fff", fontSize : 20, paddingBottom : 10}}>{props.value}</p>
    </div>
  </div>
);

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_first">
        <div className="footer_about">
        <h5 style={styles.about}>About mymun</h5>
        <p>The ultimate MUN database, conference management tool, and social network.</p>
        <span>Join over 100,000 muners to discover new MUN conferences, organize your own MUN conference, research and publish Position Papers, travel cheaply and securely, and make friends for life.</span>
        </div>
        <div className="footer_links">
          <div style={{width : '100%', padding : 40}}>{Links.map(link => <p>{link}</p>)}</div>
          <div style={{width : '100%', padding : 40}}>{MUN_LINKS.map(link => <p>{link}</p>)}</div>
        </div>
        <div className="footer_contact">
          <div className="contact_info">
            {Infos.map(info => <InfoElement img={info.img} title={info.title} value={info.value} />)}
          </div>
        </div>
      </div>
      <p>COPYRIGHT © 2018-2019, INTERNATIONAL MODEL UNITED NATIONS</p>
    </div>
  );
}
const styles = {
  about : { fontSize : 24 }, links : {fontSize : 20}
}
