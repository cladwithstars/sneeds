import React from "react";

const Nav = () => {
  return (
    <div class="navbar">
      <nav>
        <ul class="nav-links">
          <li class="nav-item">
            <a href="/" class="hover-underline-animation">
              <i class="fas fa-home"></i>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/menu" class="hover-underline-animation">
              <i class="fas fa-utensils"></i>Menu
            </a>
          </li>
          <li class="nav-item">
            <a href="/reservation" class="hover-underline-animation">
              <i class="fas fa-wine-bottle"></i>
              Reservations
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
