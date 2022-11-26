import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <h3>Chatify</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
  grid-template-rows: 10% 75% 15%;
  border-radius: 2rem;
  overflow: hidden;
  // background-color: #080420;
  .brand {
    display: flex;
    
    content: '';
    left: 25%;
    bottom: -10px;
    width: 100%;
    border-bottom:2px black;
    // height: 1px;
    background: #fff;

    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);

    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 0rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    padding-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: ;
      height: 3.5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 1.5rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          padding-top:2.8px;
          height: 2.3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #da6e6e;
    }
  }

  .current-user {
    // background-color: #0d0d30;
    

    // background: rgba(255,255,255,0.1);
    // backdrop-filter: blur(10px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    // border: 1px solid rgba(255,255,255,0.5);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    .avatar {
      padding-top:36px;
      img {
        
        height: 3rem;
        max-inline-size: 90%;
      }
    }
    .username {
      padding-top:36px;
      h2 {
        color: white;
      }
    }
    
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
