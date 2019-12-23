import React from 'react';
import './static/css/App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
const OpaqueBoxContentList = [
  {img : "./static/images/Search-Vector.png", head : "Search For MUNs", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", button : "Search"},
  {img : "./static/images/Organise-Vector.png", head : "Organise your MUN", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", button : "Organise"}
];
const Blogs = [
  {time : "Dec 12", img : "./static/images/blog_img.png", author : "Jane Doe", title : "Quality vs Quantity of delegates! What matters the most in a MUN?"},
  {time : "Dec 12", img : "./static/images/blog_img.png", author : "Jane Doe", title : "Quality vs Quantity of delegates! What matters the most in a MUN?"},
  {time : "Dec 12", img : "./static/images/blog_img.png", author : "Jane Doe", title : "Quality vs Quantity of delegates! What matters the most in a MUN?"},
  {time : "Dec 12", img : "./static/images/blog_img.png", author : "Jane Doe", title : "Quality vs Quantity of delegates! What matters the most in a MUN?"},
  {time : "Dec 12", img : "./static/images/blog_img.png", author : "Jane Doe", title : "Quality vs Quantity of delegates! What matters the most in a MUN?"},
];
const Conferences = [
  {name : "DXCIMUN<br/>2019", img : "./static/images/seattle.png", location : "Seattle, USA"},
  {name : "NMUN<br/>2019", img : "./static/images/washington.png", location : "Washington, DC"},
  {name : "Harvard<br/>World<br/>MUN 2020", img:"./static/images/tokyo.png", location:"Tokyo, Japan"},
  {name : "DXCIMUN<br/>2019", img : "./static/images/seattle.png", location : "Seattle, USA"},
  {name : "NMUN<br/>2019", img : "./static/images/washington.png", location : "Washington, DC"},
  {name : "Harvard<br/>World<br/>MUN 2020", img:"./static/images/tokyo.png", location:"Tokyo, Japan"}
];
const ServicesList = [
  {value : "For Organisers", img : "market-vector.png", head : "Powerful Marketing and Conference Management Tools", body : "Run your conference's registration with a professional, powerful conference management system, hand-built for MUN. Advertise to 100k+ MUNers.", color : "primary"},
  {value : "For Participants", img : "tree-vector.png", head : "The Biggest MUN Database with Easy Applications", body : "Let mymun's professional, experienced team help you find the best group rate for your hotel and flights!", color : "info"},
  {value : "For Groups", img : "butler-vector.png", head : "Personalized Travel Service for Your Delegation", body : "Special rates for flights and hotels as well as exclusive insurance deals, adventure tours, car rentals and more.", color : "success"},
  {value : "For Everyone", img : "airplane-vector.png", head : "The Best Flights, Hotels, Trips and Insurances", body : "Looking for your next conference? Browse the largest database of Model UN, Model EU, and other political simulation conferences and apply with one click!", color : "warning"},
];
function Blog(props) {
  return (
    <div className="service blog">
      <div className="blog_content">
      <div className="blog_poster">
      <div style={{backgroundImage : `url(${require(`${props.img}`)})`}} className="blog_img"></div>
      <div className="blog_meta">
      <span style={{paddingLeft : 2, fontWeight : "bold"}}>{props.time}</span>
      <div className="blog_share">
      <span>Share :</span>
      <img style={{padding : 5}} src={require("./static/images/facebook.png")} />
      <img src={require("./static/images/instagram.png")} />
      </div>
      </div>
      </div>
      <div className="blog_title">
      <p style={{fontWeight : "bold"}}>{props.title}</p>
      <p>Posted by {props.author}</p>
      <RoundArrowButton color="warning" size="lg" value="Read More" arrow="./static/images/whitearrow.png" invert="invert" />
      </div>
      </div>
    </div>
  );
}
const ChangeButtons = props => (
  <div className="changeButtons" style={{textAlign : "center"}}>
    <img className="changeButtonLeft" src={`${require('./static/images/changeButton.png')}`}/>
    <img onClick={() => {
      alert("BAnge");
    }} style={{transform : "rotate(180deg)"}} className="changeButtonRight" src={`${require('./static/images/changeButton.png')}`}/>
  </div>
)
function ServiceBox(service) {
  return (
    <div className="service_pad">
        <div className="service">
          <div className="service_head">
            <img src={`${require(`./static/images/${service.img}`)}`}/>
            <div style={{paddingLeft : 8}}><span>{service.head}</span></div>
          </div>
          <div className="service_body">
            <RoundArrowButton color={service.color} value={service.value}/>
            <div style={{margin : 10}}><span>{service.body}</span></div>
        </div>
      </div>
    </div>
  );
}
const OpaqueBox = props => {
  if (props.style != undefined) {
    styles = {...styles, ...props.style }
  }
  return (
      <>
      <div className="opaque_head">
        <img src={require(`${props.img}`)}/>
        <a style={styles.head}>{props.head}</a>
      </div>
      <div className="opaque_body">
        <p>{props.body}</p>
        <div className="RoundButton"><RoundArrowButton color="warning" value={props.button} /></div>
      </div>
      </>
  );
}
function Conference (props) {
  return (
    <div className="conference" style={{backgroundImage : `url(${require(`${props.img}`)})`}}>
    <RoundArrowButton color="light" value="Know More" size="lg" arrow="./static/images/whitearrow.png"/>
    <p style={{fontSize : "18px"}}>{props.location}</p>
    <h3 style={{ fontSize : "30px"}} dangerouslySetInnerHTML={{ __html: props.name }}/>
    </div>
  );
}
const RoundArrowButton = props => {console.log(props.value);
  try {
    var arrow = require(`${props.arrow}`); var number = 5;
  }catch (e) {
    arrow = null;
    number = 0;
  }
  return (
    <div>
      <button className={`btn btn-${props.size} btn-outline-${props.color}`}>{props.value}<img className={props.invert} style={{paddingLeft : number}} src={arrow}/></button>
    </div>
  );
}
function HomePage() {
  return (
    <>
      <Header />
      <div className="first_div">
        <div className="first_div_content">
          <div className="Left">
            <div><p className="Left_Title">Discover over <a style={{color : "#FFB444", fontSize : 50}}>1500 MUNs</a> Worldwide.</p></div>
            <div className="Left_Sub" style={styles.sub}><p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p></div>
          </div>
          <div className="Right">
            {OpaqueBoxContentList.map(Obj => (
              <div style={{paddingBottom : 10}}>
                <div className="opaque"><OpaqueBox img={Obj.img} head={Obj.head} body={Obj.body} button={Obj.button}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="second_div">
        <h1 style={styles.Title2}>Upcoming MUN<br/>Conferences</h1>
        <div className="carousel">
          <div className="conferences">
            {Conferences.map((con, id) => (
              <div className="wrap"><Conference name={con.name} img={con.img} location={con.location}/></div>
            ))}
          </div>
          <ChangeButtons />
        </div>
        <h1 style={styles.Title2}>All you need<br/>in one place</h1>
        <div className="services">
        {ServicesList.map(service => (
          <ServiceBox img={service.img} value={service.value} head={service.head} body={service.body} color={service.color}/>
        ))}
        </div>
        <h1 style={styles.Title2}>Our Blogs</h1>
        <div className="carousel">
          <div className="blogs">
            {Blogs.map(blog => (
              <Blog img={blog.img} time={blog.time} author={blog.author} title={blog.title}/>
            ))}
          </div>
          <ChangeButtons />
        </div>
      </div>
      <Footer/>
    </>
  );
}
let styles = {
  sub : { letterSpacing : 1.2, fontWeight : 400, fontSize : 18, lineHeight : "23px"},
  head : {
    fontWeight : "bold",
    fontSize : 24,
    textAlign : "center",
    paddingLeft: 19
  },
  Title2 : {
    fontSize : 24, color : "#FFB444", paddingBottom : 20, marginTop : 1
  }}
export default HomePage;
// https://www.figma.com/file/xX9n7skLyaoc6DB2xOA7ss/Untitled?node-id=0%3A1
// <OpaqueBox style={{head : {paddingRight : "1px !important",fontSize : 14, color : "#000"}}} img="./static/images/market-vector.png" head="Powerful Marketing and Conference Management Tools" body="Run your conference's registration with a professional, powerful conference management system, hand-built for MUN. Advertise to 100k+ MUNers." button="primary"/>
