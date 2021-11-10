import React from "react";

const EmailSignup = () => {
  return (
    <section class="email-section">
      <div class="container email-content">
        <div>
          <h3>Get on the guest list</h3>
          <p>
            Be the first to know about special events, promotions, and limited
            time menus.{" "}
          </p>
        </div>
        <div>
          <input type="email" placeholder="Email Address" />
          <a class="btn-dark display-inline-block subscribe" href="/">
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
