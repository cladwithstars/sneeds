import React from "react";
import Nav from "../Nav";
import styled from "styled-components";
import image from "../../images/redwine.jpg";

const Menu = () => {
  const appetizers = {
    Escargot: "stuffed mushroom caps, garlic, herbs",
    "Mushroom Neptune": "mushroom caps, crab, cream cheese",
    Calamari: "lightly fried, ginger garlic sauce, greek feta sauce",
    "Scallpos & Bacon": "smoked bacon, martini cocktail sauce",
    "Dozen Oysters":
      "imported from PEI, served with horseradish and homemade hotsauce",
  };

  const dinners = {
    "Blackened Chicken Oscar":
      "garlic mashed potato, shrimp, scallops, asparagus, béarnaise",
    "Prime Rib": "Horseradish, red wine herb jus. Available in 10 oz",
    "Baked Ling Cod":
      "tomato, asparagus, mushroom, cauliflower mash, white wine butter sauce",
  };

  return (
    <div>
      <Nav />
      <Container>
        <div class="container mt-1">
          <MainHeader>Appetizers</MainHeader>
          <MenuItemsContainer>
            {Object.keys(appetizers).map((key, index) => (
              <MenuItem>
                <h3>{key}</h3>
                <p>{appetizers[key]}</p>
              </MenuItem>
            ))}
          </MenuItemsContainer>
        </div>
        <div class="container mb-1">
          <MainHeader>Dinner</MainHeader>
          <MenuItemsContainer>
            {Object.keys(dinners).map((key, index) => (
              <MenuItem>
                <h3>{key}</h3>
                <p>{dinners[key]}</p>
              </MenuItem>
            ))}
          </MenuItemsContainer>
        </div>
        <img src={image} alt="woman drinking wine at dinner" />
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin-bottom: -5px;
`;
const MainHeader = styled.h1`
  border: 1px solid black;
  background-color: red;
  padding: 1rem;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MenuItem = styled.div`
  margin: 1rem;
`;

export default Menu;
