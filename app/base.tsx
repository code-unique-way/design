// <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// html,body,h1,h2,h3,h4 {font-family:"Lato", sans-serif}
// .mySlides {display:none}
// .w3-tag, .fa {cursor:pointer}
// .w3-tag {height:15px;width:15px;padding:0;margin-top:6px}
// </style>
// </head>
// <body>

// <!-- Links (sit on top) -->
import { useState } from "react"
export default function Base() {

return (
    <div>


<div className="w3-top">
  <div className="w3-row w3-large w3-light-grey">
    <div className="w3-col s3">
      <a href="#" className="w3-button w3-block">Home</a>
    </div>
    <div className="w3-col s3">
      <a href="#plans" className="w3-button w3-block">Plans</a>
    </div>
    <div className="w3-col s3">
      <a href="#about" className="w3-button w3-block">About</a>
    </div>
    <div className="w3-col s3">
      <a href="#contact" className="w3-button w3-block">Contact</a>
    </div>
  </div>
</div>

{/* // <!-- Content --> */}
{/* <div className="w3-content" style="max-width:1100px;margin-top:80px;margin-bottom:80px"> */}

  <div className="w3-panel">
    <h1><b>MARKETING</b></h1>
    <p>Template by w3.css</p>
  </div>

 
  <div className="w3-row w3-container">
    <div className="w3-center w3-padding-64">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
    </div>
    <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
      <h3>Design</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
      <h3>Branding</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
      <h3>Consultation</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
      <h3>Promises</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>
  </div>

  <div className="w3-row-padding" id="plans">
    <div className="w3-center w3-padding-64">
      <h3>Pricing Plans</h3>
      <p>Choose a pricing plan that fits your needs.</p>
    </div>

    <div className="w3-third w3-margin-bottom">
      <ul className="w3-ul w3-border w3-center w3-hover-shadow">
        <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
        <li className="w3-padding-16"><b>10GB</b> Storage</li>
        <li className="w3-padding-16"><b>10</b> Emails</li>
        <li className="w3-padding-16"><b>10</b> Domains</li>
        <li className="w3-padding-16"><b>Endless</b> Support</li>
        <li className="w3-padding-16">
          <h2 className="w3-wide">$ 10</h2>
          <span className="w3-opacity">per month</span>
        </li>
        <li className="w3-light-grey w3-padding-24">
          <button className="w3-button w3-green w3-padding-large">Sign Up</button>
        </li>
      </ul>
    </div>

    <div className="w3-third w3-margin-bottom">
      <ul className="w3-ul w3-border w3-center w3-hover-shadow">
        <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
        <li className="w3-padding-16"><b>25GB</b> Storage</li>
        <li className="w3-padding-16"><b>25</b> Emails</li>
        <li className="w3-padding-16"><b>25</b> Domains</li>
        <li className="w3-padding-16"><b>Endless</b> Support</li>
        <li className="w3-padding-16">
          <h2 className="w3-wide">$ 25</h2>
          <span className="w3-opacity">per month</span>
        </li>
        <li className="w3-light-grey w3-padding-24">
          <button className="w3-button w3-green w3-padding-large">Sign Up</button>
        </li>
      </ul>
    </div>

    <div className="w3-third w3-margin-bottom">
      <ul className="w3-ul w3-border w3-center w3-hover-shadow">
        <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
        <li className="w3-padding-16"><b>50GB</b> Storage</li>
        <li className="w3-padding-16"><b>50</b> Emails</li>
        <li className="w3-padding-16"><b>50</b> Domains</li>
        <li className="w3-padding-16"><b>Endless</b> Support</li>
        <li className="w3-padding-16">
          <h2 className="w3-wide">$ 50</h2>
          <span className="w3-opacity">per month</span>
        </li>
        <li className="w3-light-grey w3-padding-24">
          <button className="w3-button w3-green w3-padding-large">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>

  <div className="w3-row-padding" id="about">
    <div className="w3-center w3-padding-64">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Who We Are</span>
    </div>

    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
        {/* <img src="/w3images/team1.jpg" alt="John" style="width:100%"> */}
        <div className="w3-container">
          <h3>Jane Doe</h3>
          <p className="w3-opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>
      </div>
    </div>

    
  <div className="w3-center w3-padding-64" id="contact">
    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</span>
  </div>


</div>

{/* <!-- Footer --> */}

<footer className="w3-container w3-padding-32 w3-light-grey w3-center">
  <h4>Footer</h4>
  <a href="#" className="w3-button w3-black w3-margin"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div className="w3-xlarge w3-section">
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
</footer>

    </div>
)
}


