import React from 'react';
import './static/css/App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
const OpaqueBoxContentList = [
  {img : "./static/images/Search-Vector.png", head : "Search For MUNs", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", button : "Search"},
  {img : "./static/images/Organise-Vector.png", head : "Organise your MUN", body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,", button : "Organise"}
];
const Conferences = [
  {name : "DXCIMUN<br/>2019", img : "./static/images/seattle.png", location : "Seattle, USA"},
  {name : "NMUN<br/>2019", img : "./static/images/washington.png", location : "Washington, DC"},
  {name : "Harvard<br/>World<br/>MUN 2020", img:"./static/images/tokyo.png", location:"Tokyo, Japan"},
  {name : "DXCIMUN<br/>2019", img : "./static/images/seattle.png", location : "Seattle, USA"},
  {name : "NMUN<br/>2019", img : "./static/images/washington.png", location : "Washington, DC"},
  {name : "Harvard<br/>World<br/>MUN 2020", img:"./static/images/tokyo.png", location:"Tokyo, Japan"}
];
const OpaqueBox = props => (
  <div className="opaque">
    <div className="opaque_head">
      <img src={require(`${props.img}`)}/>
      <a style={styles.head}>{props.head}</a>
    </div>
    <div className="opaque_body">
      <p>{props.body}</p>
      <RoundArrowButton color="warning" value={props.button} />
    </div>
  </div>
)
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
    <div className="RoundButton">
      <button className={`btn btn-${props.size} btn-outline-${props.color}`}>{props.value}<img style={{paddingLeft : number}} src={arrow}/></button>
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
              <OpaqueBox img={Obj.img} head={Obj.head} body={Obj.body} button={Obj.button}/>
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
          <div className="changeButtons" style={{textAlign : "center"}}>
            <img className="changeButtonLeft" src={`${require('./static/images/changeButton.png')}`}/>
            <img onClick={() => {
              alert("BAnge");
            }} style={{transform : "rotate(180deg)"}} className="changeButtonRight" src={`${require('./static/images/changeButton.png')}`}/>
          </div>
        </div>
        <h1 style={styles.Title2}>All you need<br/>in one place</h1>
        <div className="services">
          <div className="service">
          <div style={{color : "black"}} className="opaque">
            <div className="">
              <img src={require(`./static/images/market-vector.png`)}/>
              <a style={styles.head}>Powerful Marketing and Confer Management Tools</a>
            </div>
            <div className="opaque_body">
            <RoundArrowButton color="primary" size="sm" value={`For Oraganizers`} />
              <p>{`Run your conference's registration with a professional, powerful conference management system, hand-built for MUN. Advertise to 100k+ MUNers.`}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
const styles = {
  sub : { letterSpacing : 1.2, fontWeight : 400, fontSize : 18, lineHeight : "23px"},
  head : {
    fontWeight : "bold",
    fontSize : 18,
    textAlign : "center",
    paddingLeft: 19
  },
  Title2 : {
    fontSize : 24, color : "#FFB444", paddingBottom : 20, marginTop : 50
  }}
export default HomePage;
// https://www.figma.com/file/xX9n7skLyaoc6DB2xOA7ss/Untitled?node-id=0%3A1
