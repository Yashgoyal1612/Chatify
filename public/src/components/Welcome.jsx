import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/fox.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Hey <span>{userName}</span> !
      </h1>
      <h3>Select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.5);
  border-right: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-radius:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #bf5106;
  }
`;
