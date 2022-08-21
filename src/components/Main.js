import React, { useState, useEffect } from "react";
import avatar from "../images/Avatar.jpg";
import edit from "../images/Edit.svg";
import plus from "../images/Plus.svg";

import { apiObj } from "../utils/Api.js";

import { Card } from "./Card.js";

import { UserContext } from "../contexts/CurrentUserContext";

export function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const user = React.useContext(UserContext);

  console.log("user is", user);
  /*state variables */
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  //componentDidMount() {
  React.useEffect(() => {
    //Promise.all() takes multiple promises, and returns a single promise (an array of the results of the input promises)
    //it rejects if ANY of the promises throw an error
    //we use this to load the user info and get the initial cards
    Promise.all([apiObj.getUserInfo(), apiObj.getInitialCards()])
      .then(([userInfoResponse, cardsResponse]) => {
        setUserAvatar(userInfoResponse.avatar);
        setUserName(userInfoResponse.name);
        setUserDescription(userInfoResponse.about);
        setCards(cardsResponse);
      })
      .catch((err) => {
        console.log(err); // log the error to the console
      });
  }, []); //empty array tells it to only do once (when it is mounted)

  return (
    <main>
      <section className="profile">
        {/* profile is a grid */}
        <div className="profile__image">
          <img
            className="profile__avatar"
            src={user && user.avatar}
            alt="Avatar"
          />
          <button
            className="profile__icon"
            id="edit-avatar-button"
            onClick={onEditAvatarClick}
          >
            {/*either set the background image of the button or do an <img> here */}
          </button>
        </div>
        <div className="profile__info">
          {/*cannot be span (w3c error from having <p> tag) */}
          <h1 className="profile__info-name">{user && user.name}</h1>
          <button
            type="button"
            className="profile__info-edit-button"
            id="profile-info-edit-button"
            onClick={onEditProfileClick}
          >
            <img src={edit} alt="Edit" />
          </button>

          <p className="profile__info-title">{user && user.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          id="profile-add-button"
          onClick={onAddPlaceClick}
        >
          <img src={plus} alt="Add" />
        </button>
      </section>
      <section className="grid">
        {/*Elements section. This is a grid of pictures*/}
        {/*array of cards via cards state variable goes here*/}
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
