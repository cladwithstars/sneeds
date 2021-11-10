import React from "react";
import styled from "styled-components";
import image from "../../images/tables.jpg";
import Nav from "../Nav";
import Map from "./Map";

const Reservation = () => {
  return (
    <>
      <Nav />
      <Container>
        <HeaderContainer>
          <Header> Reservations </Header>
        </HeaderContainer>
        <ContentContainer>
          <Details className="mb-1">
            <h2>Address </h2>
            <p>1573 Front Street</p>
            <p>Toronto Ontario M6W TJ6</p>
            <p> T: 905-421-7089 </p>
            <div className="mt-1">
              <h2>Hours of operation</h2>
              <p>Monday: 11:30am-Midnight </p>
              <p>Tuesday: 11:30am-Midnight </p>
              <p>Wednesday: 11:30am-Midnight </p>
              <p>Thursday: 11:30am-Midnight </p>
              <p>Friday: 11:30am-Midnight </p>
              <p> Saturday: 4pm-Mignight </p>
              <p>Sunday: 4pm - 11pm </p>
            </div>
          </Details>
          <Map />
        </ContentContainer>
        <img src={image} alt="bar" />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: ghostwhite;
  margin-bottom: -5px;
`;

const Details = styled.div`
  margin-right: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Header = styled.h1`
  border: 2px solid black;
  background-color: white;
  color: black;

  padding: 15px;
`;

export default Reservation;
