import React from "react";

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-1oo carousel_slide"></div>
        </div>
        <div className="carousel-item ">
          <div className="w-1oo carousel_slide">
            <div className="review">
              This is my first Model United Nations conference where I have gained a lot of new experience and have met people who are smart, kind and hardworking. Most importantly, it made me want to improve myself more!
            </div>
            <div className="person">
                <img src={require("../static/images/Sand Siwapron.png")}/>
                <span>Sand Siwapron</span>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon invert" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon invert" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
   );
}

const Review = props => {
  return null;
}
// <img className="d-block w-100"  alt="First slide"/>

// <div className="carousel-item">
  // <div className="d-block w-1oo carousel_slide"></div>
// </div>

// <RoundArrowButton color="light" value="Know More" size="lg" arrow="./static/images/whitearrow.png"/>
