import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <section>
        <div>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            recusandae voluptatum aperiam necessitatibus modi harum. Enim nisi
            sint, omnis maiores cupiditate voluptates iste minus consectetur
            asperiores quam id odit ipsa..
          </p>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

