import React from "react";
import "./Cards.css";
import Support from "../../Media/Support.jpg";
import Technologie from "../../Media/Technologie.jpg";
import Snacks from "../../Media/Snacks.jpg";
const Cards = () => {
  return (
    <div id="services">
      <ul id="cards">
        <li class="card" id="card_1">
          <div class="card__content">
            <div>
              <h2>GREAT SERVICE GUARANTEED - 24/7 Customer Support</h2>
              <p>
                {" "}
                Customer service is our number one priority, we strive to
                develop tailored service to our clients. Our mission is to work
                with businesses of every size who are seeking professional
                vending services from Miami-Dade to St. Lucie County. You can
                contact us via call, text, or email and receive a response
                within 6 hours.
              </p>
            </div>
            <figure>
              <img src={Support} alt="Support" />
            </figure>
          </div>
        </li>
        <li class="card" id="card_2">
          <div class="card__content">
            <div>
              <h2>INNOVATIVE TECHNOLOGY</h2>
              <p>
                1-Our machines accept all credit cards, as well as Apple Pay,
                Google Pay, Samsung Pay, and Alipay.
              </p>
              <p>
                {" "}
                2- All our machines are equipped with the NAYAX inventory
                tracking system, we have instant access to our inventory from
                our phones. Any time inventory runs low or any machines are
                having technical issues, we will automatically be alerted and
                will be sure to tend to every matter promptly.
              </p>
            </div>
            <figure>
              <img src={Technologie} alt="Technologie" />
            </figure>
          </div>
        </li>
        <li class="card" id="card_3">
          <div class="card__content">
            <div>
              <h2>WIDE SELECTION OF SNACKS AND DRINKS</h2>
              <p>
                {" "}
                Our machines come with a standard variety of snacks including
                chips, cookies, pastries, chocolate, and candy and a wide range
                of drinks including water, juices, sodas, energy drinks, and
                seasonal special drinks. We also rotate our inventory with new
                products based on preference and popularity. We also provide
                healthy snacks and beverages based on request. Feel free to let
                us know what you and your employees/customers love to snack on!
              </p>
            </div>
            <figure>
              <img src={Snacks} alt="Snacks" />
            </figure>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
