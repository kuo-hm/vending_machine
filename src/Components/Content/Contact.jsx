import React from "react";

const Contact = () => {
  return (
    <div>
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

export default Contact;
