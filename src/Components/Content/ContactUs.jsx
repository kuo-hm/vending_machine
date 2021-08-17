import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <div class="background" id="contact-us">
        <div class="container">
          <div class="screen">
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">
                  {" "}
                  Phone number: (786) 354-6114 Email: alphavending21@gmail.com
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="Phone" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Type of Business"
                    />
                  </div>
                  <div class="app-form-group message">
                    <select className="form-control">
                      <option value="none" selected hidden>
                        Type of Business
                      </option>
                      <option value="Food Vending">Food Vending</option>
                      <option value="Drink Vending">Drink Vending</option>
                      <option value="Snacks and Drinks">
                        Snacks and Drinks
                      </option>
                      <option value="All Vending">All Vending</option>
                    </select>
                  </div>
                  <div class="app-form-group message">
                    <select className="form-control">
                      <option value="none" selected hidden>
                        What type of machine are you interested in?
                      </option>
                      <option value="Snacks">Snacks</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
