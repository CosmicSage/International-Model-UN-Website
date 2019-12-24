import React from "react";
const Reviews = [
  {img : require("../static/images/Sand Siwapron.png"), person : {name : "Sand Siwapron", nation : "Thailand"}, review : "This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!"},
  {img : require("../static/images/Sand Siwapron.png"), person : {name : "Sand Siwapron", nation : "Thailand"}, review : "This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!"},
  {img : require("../static/images/Sand Siwapron.png"), person : {name : "Sand Siwapron", nation : "Thailand"}, review : "This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!"},
  {img : require("../static/images/Sand Siwapron.png"), person : {name : "Sand Siwapron", nation : "Thailand"}, review : "This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!"},
];
function Index(props) {
  if (props.index === 0)
    var activate = "active";
  return <li  data-target="#carouselExampleIndicators" data-slide-to={props.index} className={`${activate} invertt`}></li>;
}
const Review = props => {
  if (props.index === 0)
    var activate = "active";
  return (
    <div className={`carousel-item ${activate}`} >
      <div className="w-1oo carousel_slide">
        <div className="review">
          <span><img src={require("../static/images/quote.png")}/>{props.review}</span>
        </div>
        <div className="person">
            <img src={props.img}/>
            <span style={{fontWeight : "bold", fontSize : 18}}>{props.person.name}</span>
            <span style={{fontSize : 16}}>{props.person.nation}</span>
        </div>
      </div>
    </div>
  );
};
export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {Reviews.map((r, i) => <Index index={i}/> )}
      </ol>
      <div className="carousel-inner">
        {Reviews.map((review, index) => <Review img={review.img} person={review.person} review={review.review} index={index}/> )}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon invertt" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon invertt" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
   );
}
