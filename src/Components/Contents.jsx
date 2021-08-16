import React from "react";

const Contents = () => {
  return (
    <div>
      <h2>CATERING TO YOUR NEEDS </h2>
      <p>
        Our goal is to provide our clients with quality and affordable vending
        solutions. We give your employees and customers the vending choices they
        want while increasing productivity, providing a more pleasant experience
        to customers, and keeping your workplace satisfied.{" "}
      </p>
      <h2>GREAT SERVICE GUARANTEED - 24/7 Customer Support</h2>
      <p>
        Customer service is our number one priority, we strive to develop
        tailored service to our clients. Our mission is to work with businesses
        of every size who are seeking professional vending services from
        Miami-Dade to St. Lucie County. You can contact us via call, text, or
        email and receive a response within 6 hours.
      </p>
      <h2>INNOVATIVE TECHNOLOGY</h2>
      <ol>
        <li>
          Our machines accept all credit cards, as well as Apple Pay, Google
          Pay, Samsung Pay, and Alipay.
        </li>
        <li>
          All our machines are equipped with the NAYAX inventory tracking
          system, we have instant access to our inventory from our phones. Any
          time inventory runs low or any machines are having technical issues,
          we will automatically be alerted and will be sure to tend to every
          matter promptly.{" "}
        </li>
      </ol>
      <h2>WIDE SELECTION OF SNACKS AND DRINKS</h2>
      <p>
        Our machines come with a standard variety of snacks including chips,
        cookies, pastries, chocolate, and candy and a wide range of drinks
        including water, juices, sodas, energy drinks, and seasonal special
        drinks. We also rotate our inventory with new products based on
        preference and popularity. We also provide healthy snacks and beverages
        based on request. Feel free to let us know what you and your
        employees/customers love to snack on!{" "}
      </p>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Type of Business</label>
          <select className="form-control">
            <option value="Food Vending">Food Vending</option>
            <option value="Drink Vending">Drink Vending</option>
            <option value="Snacks and Drinks">Snacks and Drinks</option>
            <option value="All Vending">All Vending</option>
          </select>
        </div>
        <div className="form-group">
          <label>What type of machine are you interested in?</label>
          <select className="form-control">
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h2>
        Contact Us Phone number: (786) 354-6114 Email: alphavending21@gmail.com
      </h2>
    </div>
  );
};

export default Contents;
