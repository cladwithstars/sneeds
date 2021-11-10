import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div>
          <h1 class="footer-header">Sneed's</h1>
        </div>
        <p class="text-white mt-1">T: 905-421-7089</p>
        <div class="flex">
          <h4 class="text-white uppercase connect">Connect With Us Online:</h4>
          <div class="ml-1">
            <a href="#" class="ml-1">
              <i class="fab fa-facebook fa-2x text-white"></i>
            </a>
            <a href="#" class="ml-1">
              <i class="fab fa-instagram fa-2x text-white"></i>
            </a>
            <a href="#" class="ml-1">
              <i class="fab fa-twitter fa-2x text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
