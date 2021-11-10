import React from "react";

const Header = () => {
  return (
    <section>
      <div class="main position-relative">
        <a href="/" class="logo position-absolute text-center">
          Sneed's
        </a>
        <div class="content text-center position-absolute">
          <h2 class="text-center text-shadow">
            We're ready for the Christmas season.
          </h2>
          <p class="text-center text-shadow">
            Join us in celebration of the happiest time of the year.
          </p>
          <a class="btn display-inline-block text-shadow" href="/reservation">
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
